function myFunction(){
    document.querySelector("button").addEventListener(this, seEjecutaEnEvento())
}


function seEjecutaEnEvento () {

    /*document.querySelector("button").addEventListener("click", function(){
        document.querySelector("body").insertAdjacentHTML("beforeend", "<p>Beeep!</p>")
    })*/

    document.querySelector("body").innerHTML += "<p>Beep<p>"
    document.querySelector("body").classList.toggle("color")
}
