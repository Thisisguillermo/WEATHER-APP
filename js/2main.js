const apiKey = 'dd7abd123d47b36357eb5e8568f8526f';
let weatherUnits = 'metric';
let weatherDisplayLanguage = 'nl';

const position = (lat, long) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(lat);
            console.log(long);
            return lat, long;
        }
            
        )};
    }
    
window.addEventListener('load', () => {
    position();
    
});