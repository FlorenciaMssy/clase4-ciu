var formulario = document.getElementById("formulario")
var usuario = document.getElementById("usuario")
var contraseña = document.getElementById("contraseña")
var error = document.getElementById("error")

entrar.addEventListener("submit", function(event){
    if(!isNaN(usuario) && usuario.value.lenght === 8 && contraseña.value.lenght >= 6){
        console.log("Datos correctos")
    }
    else {
        error.innerHTML = "Por favor, verificá que tus datos esten correctos" 
    }
})
    
/*function validar_formulario (){
    var formulario = document.getElementById("formulario")
    var usuario = document.getElementById("usuario")
    var contraseña = document.getElementById("contraseña")
    var error = document.getElementById("error")

    if(isNaN(usuario.value) && isNaN(contraseña.value)){
        error.innerHTML = "Por favor, verificá que tus datos esten correctos"    
    }
    else {
        console.log("Datos correctos")
    }
}*/

    