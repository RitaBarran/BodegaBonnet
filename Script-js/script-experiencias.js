//ACTIVIDADES -------------

//Mostrar actividades

//elementos

const seccionActividades = document.querySelector("#experiencia")
mostrarActividades()

//función

function mostrarActividades(){

    for( let i =0; i < arrayActividades.length; i++){
      const imagen = Array.isArray(arrayActividades[i].img)
        ? arrayActividades[i].img[0]
        : arrayActividades[i].img

      seccionActividades.innerHTML +=
      `<article>
       <img src="${imagen}" alt="${arrayActividades[i].evento}">
       <div class="contenido-evento">
         <h2>${arrayActividades[i].evento}</h2>
         <p>${arrayActividades[i].descripcion}</p>
         <p class="fecha-evento">${arrayActividades[i].fecha}</p>
       </div>
       <div class="link-eventos"><a href="formulario.html">Más información</a></div>
       </article>`
    }
  }
  

  //Cambiar color a cartel MUY PRONTO — acento fijo de marca

  const cartelMuyPronto = document.querySelector("#cartel-proximamente")

  if (cartelMuyPronto) {
    cartelMuyPronto.style.backgroundColor = "#AF4134"
  }
  

//Animación de texto

const infoContenidos = document.querySelectorAll(".contenido-evento");
const moverLinks = document.querySelectorAll(".link-eventos");

function mostrarContenido() {
  for (let i = 0; i < infoContenidos.length; i++) {
    infoContenidos[i].style.opacity = 1;
    infoContenidos[i].style.transform = "translateY(0)";
    moverLinks[i].style.opacity = 1;
    moverLinks[i].style.transform = "translateY(0)";
  }
}

setTimeout(mostrarContenido, 800);