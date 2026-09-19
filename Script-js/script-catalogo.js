

// MOSTRAR PRODUCTOS EN EL CATALOGO------------------------ // 

//Elementos 

const seccionVinos = document.querySelector("#vinos")


mostrarProductos()

// Funciones

function mostrarProductos(){

  seccionVinos.innerHTML= "" 

  for( let i =0; i < arrayProductosFiltrados.length; i++){

     seccionVinos.innerHTML +=
     `<article>
     <figure><a class="vino-img-link" href="detalle.html?id=${arrayProductosFiltrados[i].id}"><img src="${arrayProductosFiltrados[i].img[0]}" alt="${arrayProductosFiltrados[i].nombre}"></a></figure>
     <h3>${arrayProductosFiltrados[i].nombre}</h3>
     <p> ${arrayProductosFiltrados[i].cosecha}</p>
     <div class="precio">
     <p>$${arrayProductosFiltrados[i].precio}</p>
     <a class="vino-ver-mas" href="detalle.html?id=${arrayProductosFiltrados[i].id}">Ver más</a>
     </div>
     </article>`
    

  }


}

//FILTROS -----------------------

//Elementos
const selectTinto = document.querySelector("#tinto")
const selectRosado = document.querySelector("#rosado")
const selectBlanco = document.querySelector("#blanco")
const selectEspumante = document.querySelector("#espumoso")
const selectTipoDeVino = document.querySelector("#selector1")
const selectTipoCosecha = document.querySelector("#selector2")
const selectAneja = document.querySelector("#aneja")
const selectNueva = document.querySelector("#nueva")
const selectOrdenar = document.querySelector("#selector3")
const buscarVinos = document.querySelector("#buscar")



//Evento

selectTipoDeVino.addEventListener("click", filtrarTipoDeVino)
selectTipoCosecha.addEventListener("click", filtrarTipoCosecha)
selectOrdenar.addEventListener("click", ordenarPor)
buscarVinos.addEventListener("keyup", buscarProductos)



//Funcion

function filtrarTipoDeVino(){

    seccionVinos.innerHTML = ""
    arrayProductosFiltrados= []

    let opcion1 = selectTinto.value
    let opcion2 =  selectRosado.value
    let opcion3 = selectBlanco.value
    let opcion4 = selectEspumante.value

    for( let i=0; i <arrayProductos.length; i++){

        
        if( arrayProductos[i].variante == opcion1 && selectTinto.checked){
  
          arrayProductosFiltrados.push(arrayProductos[i])
  
      } else if(arrayProductos[i].variante == opcion2 && selectRosado.checked){
       
        arrayProductosFiltrados.push(arrayProductos[i])

      }  else if(arrayProductos[i].variante == opcion3 && selectBlanco.checked){
       
        arrayProductosFiltrados.push(arrayProductos[i])

      }else if(arrayProductos[i].variante == opcion4 && selectEspumante.checked){
       
        arrayProductosFiltrados.push(arrayProductos[i])

      }else if (!selectTinto.checked && !selectRosado.checked && !selectBlanco.checked  && !selectEspumante.checked) {
       
        arrayProductosFiltrados.push(arrayProductos[i])

      }

      } 
     
      mostrarProductos()


}

function filtrarTipoCosecha(){

    seccionVinos.innerHTML = ""
    arrayProductosFiltrados= []

    let opcion1 = selectAneja.value
    let opcion2 =  selectNueva.value
    
    for( let i=0; i <arrayProductos.length; i++){

        
        if( arrayProductos[i].tipoCosecha == opcion1 && selectAneja.checked){
  
          arrayProductosFiltrados.push(arrayProductos[i])
  
      } else if(arrayProductos[i].tipoCosecha == opcion2 && selectNueva.checked){
       
        arrayProductosFiltrados.push(arrayProductos[i])

      } else if (!selectAneja.checked && !selectNueva.checked) {
       
        arrayProductosFiltrados.push(arrayProductos[i])

      }

      }
     
      mostrarProductos()

}

function ordenarPor(){

    seccionVinos.innerHTML = ""
    arrayProductosFiltrados= []
    let selector = selectOrdenar.value
    for( let i=0; i <arrayProductos.length; i++){
        if(selector== "todos"){
          arrayProductosFiltrados.push(arrayProductos[i])
  
        }
      else if( arrayProductos[i].orden == selector){
  
          arrayProductosFiltrados.push(arrayProductos[i])
  
  
      }
  
      }
      mostrarProductos()

}

//BUSCADOR


function buscarProductos(){

  let arrayBuscar = []
    let valor = buscarVinos.value.toLowerCase()

    if(valor === ""){
      arrayProductosFiltrados = arrayProductos.slice()
    } else {

      for(let i = 0; i  < arrayProductosFiltrados.length; i++){
        if(arrayProductosFiltrados[i].nombre.toLowerCase().includes(valor.toLowerCase())||
        arrayProductosFiltrados[i].variante.toLowerCase().includes(valor.toLowerCase())){
            
          arrayBuscar.push(arrayProductosFiltrados[i])
        
        }
        
    }
    
    arrayProductosFiltrados = arrayBuscar.slice();
    }
   
    mostrarProductos() 
       
}

//CARTEL SELECCIÓN DE TEMPORADA — cuenta regresiva

const diasEl = document.querySelector("#dias")
const horasEl = document.querySelector("#horas")
const minutosEl = document.querySelector("#minutos")
const segundosEl = document.querySelector("#segundos")
const cartelPromo = document.querySelector(".descuentos")

const DURACION_DIAS = 20
const finDelDescuento = new Date()
finDelDescuento.setDate(finDelDescuento.getDate() + DURACION_DIAS)
finDelDescuento.setMilliseconds(0)

let intervaloCuenta = null

function pad(n) {
  return String(n).padStart(2, "0")
}

function pintarCuenta(dias, horas, minutos, segundos) {
  diasEl.textContent = pad(dias)
  horasEl.textContent = pad(horas)
  minutosEl.textContent = pad(minutos)
  segundosEl.textContent = pad(segundos)
}

function finalizarCuenta() {
  pintarCuenta(0, 0, 0, 0)
  if (intervaloCuenta) {
    clearInterval(intervaloCuenta)
    intervaloCuenta = null
  }
  if (cartelPromo) {
    cartelPromo.classList.add("descuentos--finalizado")
  }
}

function cuentaRegresiva() {
  const diferencia = finDelDescuento.getTime() - Date.now()

  if (diferencia <= 0) {
    finalizarCuenta()
    return
  }

  const totalSegundos = Math.floor(diferencia / 1000)
  const dias = Math.floor(totalSegundos / (60 * 60 * 24))
  const horas = Math.floor((totalSegundos / (60 * 60)) % 24)
  const minutos = Math.floor((totalSegundos / 60) % 60)
  const segundos = totalSegundos % 60

  pintarCuenta(dias, horas, minutos, segundos)
}

cuentaRegresiva()
intervaloCuenta = setInterval(cuentaRegresiva, 1000)

