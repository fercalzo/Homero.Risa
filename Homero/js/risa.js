let estadoRisa = "apagado";

/* sonidos */
let sonidoHomero = document.querySelector("#homero_encendido");
let sonidoBoton = document.querySelector("#homero_click");

/* divs */
let homero = document.querySelector("#homero")
let boton = document.querySelector("#homero_boton")

boton.addEventListener("click", () => {
    controlarHomero()
})

function controlarHomero() {
   if (estadoRisa == "apagado") {
       estadoRisa = "encendido";
       sonidoRisa()
    //sonido
    homero.classList.add("homero_activo")
   } else {
       estadoRisa = "apagado";
       sonidoRisa()
    //sonido
    homero.classList.remove("homero_activo")
   }
}

function sonidoRisa() {
    if (sonidoHomero.paused) {
        sonidoBoton.play();
        sonidoHomero.play();
    } else {
        sonidoBoton.play();
        sonidoHomero.pause();
        sonidoHomero.currentTime = 0;
    }
}