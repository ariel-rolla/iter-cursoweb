

//const contenedor = document.getElementById("contenedor")

const btn = document.getElementById("btn-click")

btn.addEventListener("mouseover", () => {
    btn.innerText="Haceme click"
})

btn.addEventListener("mouseleave", () => {
    btn.innerText="Boton"
})

btn.addEventListener("click", () => {
    alert("Hizo un click")
})