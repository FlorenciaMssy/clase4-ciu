function nombreYEdad(){
    alert("Bienvenido a mi primer pagina usando JavaScript!")
    var usuario_nombre = prompt("Cuál es tu nombre?")
    alert("Hola " + usuario_nombre)
    var usuario_edad = prompt("Cuál es tu edad?")
    console.log("Tu edad es " + usuario_edad)
    alert("Tu nombre es " + usuario_nombre + " y tenes " + usuario_edad + " años")
}

function calcularEdad(){
    var usuario_edad = prompt("Cuál es tu edad?")
    var dias_años = usuario_edad * 365
    alert("Has vivido durante " + dias_años + " días")

}