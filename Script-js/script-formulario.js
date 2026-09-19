//VALIDACIÓN FORMULARIO -

//Elementos

const inputNombre = document.querySelector("#nombre")
const inputApellido = document.querySelector("#apellido")
const inputEmail = document.querySelector("#email")
const inputTelefono = document.querySelector("#telefono")
const inputCiudad = document.querySelector("#ciudad")
const txtAreaMensaje = document.querySelector("#mensaje")
const mensajeError = document.querySelector("#mensaje-de-error")
const mensajeError2 = document.querySelector("#mensaje-de-error2")
const mensajeOK = document.querySelector("#mensaje-ok")
const btnEnviarFormulario = document.querySelector("#btn-enviar-form")

// Eventos

btnEnviarFormulario.addEventListener("click", validarFormulario)
inputEmail.addEventListener("change", validarEmail)


//Funciones

function validarEmail(){
    let emailIngresado = inputEmail.value
    let ubicacionArroba= emailIngresado.indexOf("@") 
    let ubicacionPunto= emailIngresado.lastIndexOf(".")

   if( ubicacionArroba== -1){
    mensajeError2. textContent= "El mail debe contener un @"
       


    } else if( ubicacionArroba != emailIngresado.lastIndexOf("@")){ 
        mensajeError2.textContent= "El email debe tener solo un @"
       

    } else if (emailIngresado.charAt(ubicacionArroba+1) == ""){ 
        mensajeError2.textContent= "despues del @ debe tener algo mas escrito"
       
    } else if(ubicacionPunto == -1){
        mensajeError2.textContent= "el email debe contener un punto"
       

    } else if (ubicacionArroba > ubicacionPunto){
        mensajeError2.textContent= "debe haber un punto despues del @"
        
    }else if (emailIngresado.charAt(ubicacionPunto+1) == ""){ 
        mensajeError2.textContent= "despues del punto falta extención de la web ( ej.: com, uy, etc"
        
    } else{
        mensajeError2.textContent= "email OK"
        mensajeError2.style.color= "green"
    }
}

function validarFormulario(event){
  
    event.preventDefault()
    
    mensajeError.textContent = ""
    mensajeOK.textContent= ""
    

    let nombreIngresado = inputNombre.value
    let apellidoIngresado = inputApellido.value
    let emailIngresado = inputEmail.value
    let telefonoIngresado = parseInt(inputTelefono.value)
    let ciudadIngresada = inputCiudad.value
    let mensajeIngresada = txtAreaMensaje.value
    let patron= "000000000"
    let inicioCel = [ "91", "92", "93", "94", "95", "96", "97", "98" , "99" ]
    
  

    if(inputNombre.value == ""  || inputApellido.value == ""|| inputEmail.value == "" 
    || inputTelefono.value == ""|| inputCiudad.value == ""|| txtAreaMensaje.value == ""){

        mensajeError.textContent = "Por favor completar todos los campos requeridos*"

    } else if(isNaN(inputTelefono.value)){

        mensajeError.textContent = "Por favor ingrese un número de teléfono válido"
        
    
       

    }else if (!inicioCel.includes(telefonoIngresado.toString().slice(0, 2))){

        inputTelefono.value = "" 
        inputTelefono.style.borderColor = "red"
        mensajeError.textContent = "Por favor ingrese un número de celular válido"
        
    }
    else if (telefonoIngresado.toString().indexOf(0) == 0){

        inputTelefono.value = "" 
        inputTelefono.style.borderColor = "red"
        mensajeError.textContent = "Por favor ingrese un número de celular válido"
        
    }
    else if(telefonoIngresado.toString().length +1 !== patron.length  ){
        

        inputTelefono.value = "" 
        inputTelefono.style.borderColor = "red"
        mensajeError.textContent = "Por favor ingrese un número con 9 digitos"


    } else{

        inputTelefono.style.borderColor = ""
        mensajeError.textContent = ""
        mensajeOK.textContent = "Todos los datos fueron enviados con exito!"
        mensajeOK.style.color = "green"
  
}
}
