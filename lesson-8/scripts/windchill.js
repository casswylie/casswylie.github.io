


function windChill() {
    var t = 40.5; //average of high and low temperature in Farenheit
    var s = 8; //windspeed in mph
    var expo = Math.pow(s, 0.16); //windspeed with exponant
    var f  = 35.74 + (0.6215 * t) -(35.75 * expo) + (0.4275 * t * expo); //windchill factor in Fahrenheit
    f = f.toFixed(2);
    document.getElementById("windChill").innerHTML = f;
}
