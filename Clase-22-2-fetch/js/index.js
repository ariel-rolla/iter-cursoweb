const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
  .then((response) => response.json())
  .then(mostrarJson);

function mostrarJson(json) {
  const contenido = document.getElementById('content');

  for (let i = 0; i < json.length; i++) {
    contenido.innerHTML += `<div class="card" style="width: 18rem;">
                                <img src="https://img.freepik.com/vector-premium/diseno-avatar-persona_24877-38133.jpg?w=826" class="card-img-top" alt="...">
                                
                                <div class="card-body">
                                    <h5 class="card-title">${json[i].name}</h5>
                                    <p class="card-text">${json[i].email}</p>                                
                                </div>
                            </div>`;
  }
}
