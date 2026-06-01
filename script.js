let input = document.getElementById("cityInput");
let button = document.getElementById("searchBtn");

let cityName = document.getElementById("cityName");
let temperature = document.getElementById("temperature");
let description = document.getElementById("description");

button.onclick = function(){

    let city = input.value;

    if(city === ""){
        alert("Please enter a city name");
        return;
    }

    getWeather(city);

};

function getWeather(city){

    let apiKey = "ab8d8f4f077e950a802e19b282b22bb4";

    let url = "https://api.openweathermap.org/data/2.5/weather?q="
    + city +
    "&appid=" + apiKey +
    "&units=metric";

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        if(data.cod === "404"){
            alert("City not found");
            return;
        }

        cityName.textContent = data.name;

        temperature.textContent = data.main.temp + "°C";

        description.textContent = data.weather[0].description;

    })
    .catch(function(){
        alert("Error fetching data");
    });

}



