

//SLIDER - HEADER

const sliderVinos = document.querySelector("#slider-vinos")

let totalDeImagenes = 4
let contador= 1
function cambiarImagenes(){

    contador++     
    

    if( contador > totalDeImagenes){
        contador=1
    
    }

    sliderVinos.style.backgroundImage="url(img/"+contador+".png)"
} 

 setInterval(cambiarImagenes, 3000)



//MENSAJE MAYOR DE EDAD----------------

//Elementos

const MensajeInicio = document.querySelector("#mensaje1")
const btnSI = document.querySelector("#btn-si")
const btnNo = document.querySelector("#btn-no")




// Eventos
btnSI.addEventListener("click", iraHome)
btnNo.addEventListener("click", noPuedeEntrar)

// Funciones

let mensajeMostrado = sessionStorage.getItem("mensajeMostrado")

function AparecerMensaje() {
    if (!mensajeMostrado) {
        MensajeInicio.style.display = "block"
    }
}

function iraHome() {
    MensajeInicio.style.display = "none"
    mensajeMostrado = true;
    sessionStorage.setItem("mensajeMostrado", true)
}

function noPuedeEntrar() {
    btnNo.setAttribute("href", "https://www.google.com")
}


setTimeout(AparecerMensaje, 1500)
   
    

   
//SECCION NUESTROS RECOMENDADOS 


//Elementos

const sectionNuestrosRecomendados = document.querySelector(".grilla2x4")

//Funcion

mostrarDestacados()

function mostrarDestacados(){


  for( let i =0; i < arrayProductosFiltrados.length; i++){

    if(arrayProductosFiltrados[i].prioridad === "destacado" && arrayProductosFiltrados[i].prioridad !== undefined){
      
      sectionNuestrosRecomendados.innerHTML +=
      `<article class="recomendado-card">
      <a class="recomendado-media" href="detalle.html?id=${arrayProductosFiltrados[i].id}">
        <img src="${arrayProductosFiltrados[i].img[0]}" alt="${arrayProductosFiltrados[i].nombre}">
      </a>
      <div class="recomendado-info">
        <h3>${arrayProductosFiltrados[i].nombre}</h3>
        <p>${arrayProductosFiltrados[i].detalle}</p>
        <p class="precio-destacados">$ ${arrayProductosFiltrados[i].precio}</p>
        <div class="links-destacados">
          <a href="detalle.html?id=${arrayProductosFiltrados[i].id}">Ver más</a>
        </div>
      </div>
      </article>`

    }
   

  }

}




