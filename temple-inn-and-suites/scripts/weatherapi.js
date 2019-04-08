
//Anchorage weather conditions
var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=99516,us&appid=51c5895f12b5d16e4a8afa4b12d68ab0&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('akcurrentTemp').innerHTML = weatherData.main.temp;

    document.getElementById('akdescription').innerHTML = weatherData.weather[0].main;

}
//Gilbert Weather Conditions
var azweatherRequest = new XMLHttpRequest();

azweatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=85297,us&appid=51c5895f12b5d16e4a8afa4b12d68ab0&units=imperial', true);

azweatherRequest.send();

azweatherRequest.onload = function() {
    var azweatherData = JSON.parse(azweatherRequest.responseText);
    console.log(azweatherData);

    document.getElementById('azcurrentTemp').innerHTML = azweatherData.main.temp;

    document.getElementById('azdescription').innerHTML = azweatherData.weather[0].main;

}

//Manhattan Weather conditions
var nyweatherRequest = new XMLHttpRequest();

nyweatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=10023,us&appid=51c5895f12b5d16e4a8afa4b12d68ab0&units=imperial', true);

nyweatherRequest.send();

nyweatherRequest.onload = function() {
    var nyweatherData = JSON.parse(nyweatherRequest.responseText);
    console.log(nyweatherData);

    document.getElementById('nycurrentTemp').innerHTML = nyweatherData.main.temp;

    document.getElementById('nydescription').innerHTML = nyweatherData.weather[0].main;

}
//winter quarters
var wqweatherRequest = new XMLHttpRequest();

wqweatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=68112,us&appid=51c5895f12b5d16e4a8afa4b12d68ab0&units=imperial', true);

wqweatherRequest.send();

wqweatherRequest.onload = function() {
    var wqweatherData = JSON.parse(wqweatherRequest.responseText);
    console.log(wqweatherData);

    document.getElementById('wqcurrentTemp').innerHTML = wqweatherData.main.temp;

    document.getElementById('wqdescription').innerHTML = wqweatherData.weather[0].main;

}

