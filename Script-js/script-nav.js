const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector("#ul")
const siteNav = document.querySelector("nav")

if (navToggle && navMenu && siteNav) {
  function cerrarMenu() {
    siteNav.classList.remove("nav-abierta")
    navToggle.setAttribute("aria-expanded", "false")
    navToggle.setAttribute("aria-label", "Abrir menú")
    document.body.classList.remove("menu-bloqueado")
  }

  function abrirMenu() {
    siteNav.classList.add("nav-abierta")
    navToggle.setAttribute("aria-expanded", "true")
    navToggle.setAttribute("aria-label", "Cerrar menú")
    document.body.classList.add("menu-bloqueado")
  }

  navToggle.addEventListener("click", function () {
    if (siteNav.classList.contains("nav-abierta")) {
      cerrarMenu()
    } else {
      abrirMenu()
    }
  })

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", cerrarMenu)
  })

  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) {
      cerrarMenu()
    }
  })
}
