// Loading the location(geoFindMe) and normal elements
const Loadelements = function () {
    addElement();
    geoFindMe()
}

document.body.onload = Loadelements;

// API key needs to be in a separate file or actually handles by the server itself for security reasons. But I'll let it slide this time. https://www.freecodecamp.org/news/how-to-use-environment-variables-in-vanillajs/
const apiKey = 'dd7abd123d47b36357eb5e8568f8526f';

const weatherUnits = 'metric';

const weatherDisplayLanguage = '';

// addElement function
function addElement() {
    // create a new div element
    const section = document.createElement("section");

    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    section.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(section, currentDiv);
}

function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

        finalPosition = `${latitude} ${longitude}`;

        console.log(finalPosition)

        return { latitude, longitude }

        // let weather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${weatherUnits}&appid=${apiKey}&lang=${weatherDisplayLanguage}`;

        // console.log(weather + ' weather console check');

        // fetching from openweather api
        // fetch(weather)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         console.log(data)
        //         const { } = data.name
        //         console.log(data.name);
        //         console.log(data.sys.country);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }


    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }


}




//   document.querySelector('#find-me').addEventListener('click', geoFindMe);


// index.html


  <!-- <button id="find-me">Show my location</button><br /> -->
  <p id="status"></p>
  <a id="map-link" target="_blank"></a>