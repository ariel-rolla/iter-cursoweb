//Consumir API
//Asincrono - Sigue el resto del codigo hasta que termine la consulta a la api
//fetch devuelve una promesa, 

const URL_API = "https://swapi.dev/api"
const contenedorHTML = document.getElementById("contenedor")
const inputHTML = document.getElementById("input")
const personajes = [] 


const renderizarPersonajes = (personajesRenderizar, accion) => {
    if(personajesRenderizar.length < 1){
        if (accion == "cargar"){
            contenedorHTML.innerHTML = "<h2>Cargando...</h2>"
        }else if (accion == "filtrar"){
            contenedorHTML.innerHTML = "<h2>No se encuentran resultados para su busqueda</h2>"
        }
    }else{
        contenedorHTML.innerHTML=""
        personajesRenderizar.forEach(personaje => {
            contenedorHTML.innerHTML += `
                <div>
                    <h2>${personaje.name}</h2>
                    <p>Gender: ${personaje.gender}</p>
                    <p>Fecha de Nacimiento: ${personaje.birth_day}</p>
                    <hr>
                </div>
                `
        });
    }
}

renderizarPersonajes(personajes, "cargar")

inputHTML.addEventListener("input", () => {
    renderizarPersonajes(
        personajes.filter(
            personaje => personaje.name.toLowerCase().includes(inputHTML.value.toLowerCase())
            ), "filtrar"
        )
})


fetch(URL_API + "/people")
.then(response => response.json()) //RESUELTO: al obtener resultado satisfactorio - json para transformarlo

/* .then(data => data.results.forEach(personaje => {
    contenedorHTML.innerHTML += `<h3>${personaje.name}</h3>`
}))    Ejemplo simple*/ 

.then(data => {
        data.results.forEach(personaje => {
        personajes.push(personaje) //se obtiene variable con todos los personajes para usar
        })
        renderizarPersonajes(personajes, "cargar")
    }
)
.catch(error => console.log(error))  //Error al conectar


