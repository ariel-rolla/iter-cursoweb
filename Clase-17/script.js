

//const contenedor = document.getElementById("contenedor")

const btn = document.getElementById("btn-click")
const navegador = document.getElementById("navegador")

/* btn.addEventListener("mouseover", () => {
    btn.innerText="Haceme click"
})

btn.addEventListener("mouseleave", () => {
    btn.innerText="Boton"
}) */

btn.addEventListener("click", () => {
    // alert("Hizo un click")

    //Alterna de clase, si esta la saca, si no esta la crea en el elemento
    navegador.classList.toggle("oculto")
    /* btn.classList.toggle("rojo") */
})

