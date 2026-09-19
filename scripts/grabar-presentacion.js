const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const OUT_DIR = path.join(__dirname, 'presentacion-video');
const BASE = process.env.BONNET_URL || 'http://127.0.0.1:8765';

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function smoothScroll(page, distance, steps = 18) {
  const step = distance / steps;
  for (let i = 0; i < steps; i++) {
    await page.mouse.wheel(0, step);
    await wait(70);
  }
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: {
      dir: OUT_DIR,
      size: { width: 1440, height: 900 },
    },
    locale: 'es-UY',
  });

  const page = await context.newPage();

  // HOME
  await page.goto(`${BASE}/index.html`, { waitUntil: 'networkidle' });
  await wait(1800);

  // Age gate
  const btnSi = page.locator('#btn-si');
  if (await btnSi.isVisible().catch(() => false)) {
    await btnSi.click();
    await wait(800);
  }

  await wait(1500);
  await smoothScroll(page, 700);
  await wait(1200);
  await smoothScroll(page, 900);
  await wait(1400);

  // Hover a destacado
  const destacado = page.locator('.destacado--blancos a').first();
  if (await destacado.count()) {
    await destacado.hover();
    await wait(900);
  }

  await smoothScroll(page, 800);
  await wait(1200);

  // VINOS
  await page.click('text=Vinos');
  await page.waitForLoadState('networkidle');
  await wait(1600);
  await smoothScroll(page, 500);
  await wait(1000);

  // Toggle a filter
  const tinto = page.locator('#tinto');
  if (await tinto.count()) {
    await tinto.check({ force: true });
    await wait(1200);
    await tinto.uncheck({ force: true });
    await wait(900);
  }

  await smoothScroll(page, 700);
  await wait(1000);

  // Open first product if present
  const verMas = page.locator('#vinos a').first();
  if (await verMas.count()) {
    await verMas.click();
    await page.waitForLoadState('networkidle');
    await wait(1800);
    await smoothScroll(page, 400);
    await wait(1000);
  }

  // EXPERIENCIAS
  await page.click('text=Experiencias');
  await page.waitForLoadState('networkidle');
  await wait(1800);
  await smoothScroll(page, 500);
  await wait(1200);

  // CONTACTO
  await page.click('text=Contacto');
  await page.waitForLoadState('networkidle');
  await wait(1500);
  await page.fill('#nombre', 'Rita');
  await wait(350);
  await page.fill('#apellido', 'Diseño');
  await wait(350);
  await page.fill('#email', 'rita@ejemplo.com');
  await wait(350);
  await page.fill('#telefono', '099123456');
  await wait(350);
  await page.fill('#ciudad', 'Montevideo');
  await wait(350);
  await page.fill('#mensaje', 'Consulta de presentación Bodega Bonnet.');
  await wait(1200);

  // GALERÍA / 404 animación
  await page.click('text=Galería');
  await page.waitForLoadState('networkidle');
  await wait(4500);

  // Volver home via logo
  await page.click('a.logo-link');
  await page.waitForLoadState('networkidle');
  await wait(1600);

  const videoPath = await page.video().path();
  await context.close();
  await browser.close();

  const finalPath = path.join(OUT_DIR, 'bodega-bonnet-recorrido.webm');
  if (fs.existsSync(videoPath)) {
    fs.renameSync(videoPath, finalPath);
  }

  console.log('VIDEO_OK');
  console.log(finalPath);
})().catch((err) => {
  console.error('VIDEO_FAIL');
  console.error(err);
  process.exit(1);
});
