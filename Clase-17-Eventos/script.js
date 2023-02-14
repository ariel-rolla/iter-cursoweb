

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



//Formulario
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit",(event) => { // event se abrevia e a veces
    event.preventDefault() // Evita comportamiento por defecto, evita que recargue pagina
    
    console.log("El nombre del usuario es: "+formulario.nombre.value)
    console.log("El mail del usuario es: "+formulario.email.value)
    console.log("La contraseña  del usuario es: "+formulario.password.value)
})

