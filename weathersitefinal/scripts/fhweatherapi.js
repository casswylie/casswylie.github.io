
var weatherRequest = new XMLHttpRequest();

//var apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial';

weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=51c5895f12b5d16e4a8afa4b12d68ab0&units=imperial', true);

weatherRequest.send();

weatherRequest.onload = function() {
    var weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;

    document.getElementById('description').innerHTML = weatherData.weather["0"].main;

    document.getElementById('lowTemp').innerHTML = weatherData.main.temp_min;

    document.getElementById('highTemp').innerHTML = weatherData.main.temp_max;

    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;

    document.getElementById('humidity').innerHTML = weatherData.main.humidity;

    windChill();

    var iconcode = weatherData.weather[0].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

    
} //end of function
