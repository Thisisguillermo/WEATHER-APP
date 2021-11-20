const apiKey = 'dd7abd123d47b36357eb5e8568f8526f';
let weatherUnits = 'metric';
let weatherDisplayLanguage = 'en';

let TemperatureDescription = document.querySelector('.temperature-description');
let TemperatureDegree = document.querySelector('.temperature-degree');
let LocationTimezone = document.querySelector('.location-timezone');
let WeatherIcon = document.querySelector('.weathericon')





function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    };
};


function showPosition(position) {
    var lat = position.coords.latitude
    var long = position.coords.longitude
    console.log(lat, long);
    var api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${weatherUnits}&lang=${weatherDisplayLanguage}&appid=${apiKey}`
    console.log(api)

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const { temp, name } = data.main;
            const { description } = data.weather[0];
            const { weathermain, icon, id } = data.weather[0].main;
            const location = data.name

            console.log(data);
            console.log(temp);
            console.log(data.weather[0].description);
            console.log(data.weather[0].main);
            console.log(data.weather[0].id);
            console.log(data.weather[0].icon);
            console.log(location);

            // set DOM elements from the api
            TemperatureDegree.textContent = Math.floor(temp) + '°';
            TemperatureDescription.textContent = description[0].toUpperCase() + description.slice(1).toLowerCase();
            LocationTimezone.textContent = location;

            openWeatherIconId = data.weather[0].icon
            console.log(openWeatherIconId)
            let openWeatherPicture = `http://openweathermap.org/img/wn/${openWeatherIconId}@2x.png`;
            whatever = openWeatherPicture
            console.log(openWeatherPicture);

            var img = document.createElement('img');
            img.src = openWeatherPicture;
            document.getElementById('iconwhat').appendChild(img);




        });
}

window.addEventListener('load', () => {
    getLocation();
});