

//Elementos

const imagen= document.querySelector("#imagen")
const miniaturas= document.querySelector("#miniaturas")


//CREACION PAGINA DETALLES

console.log(window.location.href)
console.log(window.location.search)

let id = new URLSearchParams(location.search).get("id")
id = Number(id)

console.log(id)


let productoSeleccionado

for(let i = 0; i < arrayProductos.length; i++){
    if(arrayProductos[i].id == id){
        productoSeleccionado = arrayProductos[i]
    }
    console.log(productoSeleccionado)
}


const h2 = document.querySelector("#h2-galeria")
const cosecha = document.querySelector("#cosecha")
const precio = document.querySelector("#precio")
const galeria = document.querySelector("#galeria")
const detalles = document.querySelector("#detalles-vinos")

h2.textContent = productoSeleccionado.nombre 
cosecha.textContent = productoSeleccionado.cosecha
precio.textContent = "Precio: $" + productoSeleccionado.precio
detalles.textContent= productoSeleccionado.detalle


//Funcion - CREACIÓN DE GALERIA


for(let i=0 ; i < productoSeleccionado.img.length; i++){

    imagen.innerHTML = `<img src="${productoSeleccionado.img[0]}" alt="">`
     
    let img= document.createElement("img")
    
    img.setAttribute("src", productoSeleccionado.img[i])
     img.addEventListener("mouseover", cambiarImg)
     img.addEventListener("click", cambiarImg)
     miniaturas.insertAdjacentElement("beforeend", img)

}

function cambiarImg(){
    let src= this.getAttribute("src")
    imagen.innerHTML = `<img src="${src}"alt="">`
}

 
//FILTROS MIGA DE PAN -----------

const migaDePan = document.querySelector(".miga-de-pan")


for(let i=0; i < arrayProductos.length; i++){

    if(arrayProductos[i].id == id){
        migaDePan.innerHTML +=
 `<nav>
     <a href="index.html">Home/</a>
     <a href="nuestrosvinos.html">Vinos</a>
     <a href="#" class="vino-mostrado">/ ${arrayProductos[i].nombre}</a>
 </nav>`



    }
    

}

const linkVinoMostrado = document.querySelector(".vino-mostrado")
    
linkVinoMostrado.style.color = "#D6245B"


// CARRITO DE COMPRAS --------------

//elementos 

const carritoDeComprasContenido= document.querySelector("#carrito-contenido")
const cantidadUnidades = document.querySelector("#cantidad")
const productoComprado = document.querySelector("#producto-comprado")
const ImporteTotal = document.querySelector("#precio-total")
const totalAPagar = document.querySelector("#total-a-pagar")
const AgregarAlCarrito = document.querySelector("#agregar-carrito")
const cantidadArticulosMostrados = document.querySelector(".bolsa-a")
const cerrarCarrito = document.querySelector("#salir")


//eventos 
AgregarAlCarrito.addEventListener("click", agregarProductosCarrito)
cantidadArticulosMostrados.addEventListener("click", AparecerCompra)
cerrarCarrito.addEventListener("click", cerrarElCarrito)
cantidadArticulosMostrados.addEventListener("click",abrirElCarrito)


//función
let contador = 0
let haSidoClicado = false



function abrirElCarrito() {
    carritoDeComprasContenido.style.display = "flex";
}


function agregarProductosCarrito(){

    contador ++
    cantidadUnidades.textContent = contador  
    let detalleCompra = {};
  
    for(let i=0; i < arrayProductos.length; i++){

        if(arrayProductos[i].id == id){
            productoComprado.textContent = "____ "+ arrayProductos[i].nombre + " ____"
          
        }  
   
    if( arrayProductos[i].id == id && contador > 1){
        
       let aPagar = contador * arrayProductos[i].precio
       ImporteTotal.textContent = "$"+ aPagar
       totalAPagar.textContent= "Total a pagar: "+"$" + aPagar
    
    } else if(arrayProductos[i].id == id && contador == 1) {
        aPagar = arrayProductos[i].precio 
        ImporteTotal.textContent = "$" +  aPagar
        totalAPagar.textContent= "Total a pagar: "+ "$" + aPagar
 
    }
}   
 cantidadArticulosMostrados.innerHTML=`<img src="img/BOLSA-DE-COMPRAS.gif" alt="Carrito" id="bolsa"> ${contador}`


}


function AparecerCompra(agregarProductosCarrito){

    if(!haSidoClicado){
        
        carritoDeComprasContenido.style.display= "flex"
        haSidoClicado = true
    }


}
function cerrarElCarrito() {
    carritoDeComprasContenido.style.display = "none";
}


