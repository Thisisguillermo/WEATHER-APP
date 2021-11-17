const apiKey = 'dd7abd123d47b36357eb5e8568f8526f';
let weatherUnits = 'metric';
let weatherDisplayLanguage = 'en';

window.addEventListener('load', () => {
    let lat;
    let long;


    let TemperatureDescription = document.querySelector('.temperature-description');
    let TemperatureDegree = document.querySelector('.temperature-degree');
    let LocationTimezone = document.querySelector('.location-timezone');

    var icons = new Skycons({ "color": "white" });

    icons.set("clear-day", Skycons.CLEAR_DAY);
    icons.set("clear-night", Skycons.CLEAR_NIGHT);
    icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
    icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
    icons.set("cloudy", Skycons.CLOUDY);
    icons.set("rain", Skycons.RAIN);
    icons.set("sleet", Skycons.SLEET);
    icons.set("snow", Skycons.SNOW);
    icons.set("wind", Skycons.WIND);
    icons.set("fog", Skycons.FOG);

    icons.play(); Skycons


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(lat);
            console.log(long);

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${weatherUnits}&lang=${weatherDisplayLanguage}&appid=${apiKey}`
            console.log(api)




            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp, name } = data.main;
                    console.log(temp);

                    const { description } = data.weather[0];
                    console.log(data.weather[0].description);

                    const { weathermain, icon } = data.weather[0].main;
                    console.log(data.weather[0].main);

                    // const { name } = data;
                    const location = data.name
                    console.log(location);

                    // set DOM elements from the api
                    TemperatureDegree.textContent = Math.floor(temp) + '°';
                    TemperatureDescription.textContent = description[0].toUpperCase() + description.slice(1).toLowerCase();
                    LocationTimezone.textContent = location;


                })
        });




    } else {

    }



});
