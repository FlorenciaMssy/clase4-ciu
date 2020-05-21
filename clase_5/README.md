### 1- ¿En qué parte del código se genera un closure? ¿Por qué?
function cambiarDimensionFuente(size) {
    return function() { 
        document.body.style.fontSize = size + 'px';
        };
}
Se genera el closure en esta parte del código. Porque que la funcion() 
permite acceder al ámbito (size) de cambiarDimensionFuente().

 
### 2-¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se cambie el tamaño de las fuentes de la página?
¿En qué parte del código se establece que al hacer click sobre el elemento con id fuente-8 se cambie el tamaño de las fuentes de la página?
function setClicks(){
    document.getElementById('fuente-8').onclick = size8;
    document.getElementById('fuente-16').onclick = size16;
    document.getElementById('fuente-24').onclick = size24;
}
En esta parte del código podemos al hacer click cambiar el código de la fuente, también se necesita en el body del archivo HTML llamarla de la siguiente manera: 
<(body) onload="setClicks()"> (body tiene paréntesis porque sino el read me no me lo mostraba)

### 3-Supone que eliminamos la función setClicks y dejamos su código “libre” dentro de las etiquetas <script> … </script>. ¿Qué mensaje de error te muestra la consola de depuración? (Activa la consola si no la tienes activada) ¿Por qué aparece ese mensaje de error?

18:49 Error de referencia no capturado: size8 no está definido.
11:32 Error de referencia no capturado: setClicks no está definido.

Aparece este mensaje porque no están definidos (ya que se encuentran en el archivo de JS)

### 4-¿Debemos escribir document.getElementById('fuente-8').onclick = size8; ó document.getElementById('fuente-8').onclick = size8(); ?¿Por qué?
Se debe escribir document.getElementById('fuente-8').onclick = size8; ya que size8 no es una función sino una variable (que guarda una función).

### 5-Supón que al cargar la página queremos que el tamaño inicial de fuente sea 8 y para ello nos valemos de la función setClicks. ¿Debemos escribir dentro de esta función size8; ó size8();? ¿Por qué?
En ese caso debemos escribir size8(); porque estamos llamando a la función directamente de manera forzada.

### 6-Las closures no siempre son necesarias, incluso a veces se generan involuntariamente o innecesariamente consumiendo recursos del sistema que podrían ahorrarse. ¿Qué ventajas le ves al uso de closures en este código? ¿Y qué inconvenientes?
La ventaja en este caso es no escribir tanto código o no repetir las funciones cada vez que se quiera cambiar un tamaño de letra.
En inconveniente podría ser el rendimiento de la PC, aunque no creemos que este sea el caso ya que solo se utiliza un solo closure.

### 7-Reescribí el código (hacelo como mejor creas cambiando todo aquello que consideres necesario) de forma que obtengas el mismo resultado pero sin hacer uso de closures.

function cambiarFuente8() {
document.body.style.fontSize = 8px;
}
function cambiarFuente16() {
document.body.style.fontSize = 16px;
}
function cambiarFuente24() {
document.body.style.fontSize = 24px;
}
 
 
 
function setClicks(){
    document.getElementById('fuente-8').onclick = cambiarFuente8();
    document.getElementById('fuente-16').onclick = cambiarFuente16();
    document.getElementById('fuente-24').onclick = cambiarFuente24();
}

