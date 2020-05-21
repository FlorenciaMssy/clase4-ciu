function agregarClase() {
    
setInterval(agregarClase, 1000);
document.querySelector("div").classList.toggle("square");
}

agregarClase()