const API_KEY = "d3a937b9d2f08fd685207d58366f7f6f";

const btnSearch = document.getElementById('btn-search');
const txtSearch = document.getElementById('txt-search');

const getWeatherDataByRegion = (event) => {
    event.preventDefault();
    const region = txtSearch.value;
    const url = `https://api.openweathermap.org/data/2.5/find?q=${region}&appid=${API_KEY}&units=metric&lang=es`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => showWeatherData(data.list));
}


const getWeatherData = (position) => {

    /*const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;*/

    //Destructuring de objetos - Ahorrar nombre de variables
    const { latitude, longitude} = position.coords;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => showWeatherData([data]));
}


const showWeatherData = (data) => {
    const result = document.getElementById('result');
    result.innerHTML = "";
    
    data.forEach(resultado => {

        result.innerHTML += `
                        <div class="row alert alert-light">
                            <div class="col">
                                <img src="http://openweathermap.org/img/wn/${resultado.weather[0].icon}.png" />
                                <p>${resultado.weather[0].description}</p>
                            </div>
                            <ul>
                                <li>Region: ${resultado.name} (${resultado.sys.country})</li>
                                <li>Temperatura: ${resultado.main.temp} C°</li>
                                <li>Humedad: ${resultado.main.humidity}%</li>
                                <li>Presion atmosferica: ${resultado.main.pressure} hPa</li>
                            </ul>
                        </div>
        `;
    
    }); 
}

btnSearch.addEventListener('click', getWeatherDataByRegion);


const handleGetPositionError = () => {
    console.log('Salio todo mal!'); 
}

navigator.geolocation.getCurrentPosition(
    getWeatherData, 
    handleGetPositionError
);

