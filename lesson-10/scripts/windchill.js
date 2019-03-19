


function windChill() {
    var t = 40.5; //average of high and low temperature in Farenheit
    var s = 8; //windspeed in mph
    var expo = Math.pow(s, 0.16); //windspeed with exponant
    var f  = 35.74 + (0.6215 * t) -(35.75 * expo) + (0.4275 * t * expo); //windchill factor in Fahrenheit
    f = f.toFixed(2);
    document.getElementById("windChill").innerHTML = f;
}

/*var windRequest = new XMLHttpRequest();
windRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=51c5895f12b5d16e4a8afa4b12d68ab0&units=imperial', true);
windRequest.send();


windRequest.onload = function windChill() {


    var low = document.getElementById('lowTemp').innerHTML = weatherData.main.temp_min; //average of high and low temperature in Farenheit
    var high = document.getElementById('highTemp').innerHTML = weatherData.main.temp_max;
    var average = (low + high) /2;
    var s = document.getElementById('windSpeed').innerHTML = weatherData.wind.speed; //windspeed in mph
    var expo = Math.pow(s, 0.16); //windspeed with exponant
    
    var f  = 35.74 + (0.6215 * average) -(35.75 * expo) + (0.4275 * average * expo); //windchill factor in Fahrenheit
    f = f.toFixed(2);
    document.getElementById("windChill").innerHTML = f;
}*/