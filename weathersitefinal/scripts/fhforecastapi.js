
// Fish Haven zip=83287


var forecastObject = new XMLHttpRequest();

forecastObject.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=83287,us&appid=51c5895f12b5d16e4a8afa4b12d68ab0&units=imperial', true);

forecastObject.send();

forecastObject.onload = function() {
    var forecastData = JSON.parse(forecastObject.responseText);
    console.log(forecastData);
    //Monday
    document.getElementById('mdescription').innerHTML = forecastData.list[0].weather[0].description;

    document.getElementById('mhigh').innerHTML = forecastData.list[0].main.temp_max;

    document.getElementById('mlow').innerHTML = forecastData.list[0].main.temp_min;

    document.getElementById('mwind').innerHTML = forecastData.list[0].wind.speed;


    //Tuesday
    document.getElementById('tdescription').innerHTML = forecastData.list[1].weather[0].description;

    document.getElementById('thigh').innerHTML = forecastData.list[1].main.temp_max;

    document.getElementById('tlow').innerHTML = forecastData.list[1].main.temp_min;

    document.getElementById('twind').innerHTML = forecastData.list[1].wind.speed;



    //Wednesday
    document.getElementById('wdescription').innerHTML = forecastData.list[2].weather[0].description;

    document.getElementById('whigh').innerHTML = forecastData.list[2].main.temp_max;

    document.getElementById('wlow').innerHTML = forecastData.list[2].main.temp_min;

    document.getElementById('wwind').innerHTML = forecastData.list[2].wind.speed;


    //Thursday
    document.getElementById('thdescription').innerHTML = forecastData.list[3].weather[0].description;

    document.getElementById('thhigh').innerHTML = forecastData.list[3].main.temp_max;

    document.getElementById('thlow').innerHTML = forecastData.list[3].main.temp_min;

    document.getElementById('thwind').innerHTML = forecastData.list[3].wind.speed;



    //Friday
    document.getElementById('fdescription').innerHTML = forecastData.list[4].weather[0].description;

    document.getElementById('fhigh').innerHTML = forecastData.list[4].main.temp_max;

    document.getElementById('flow').innerHTML = forecastData.list[4].main.temp_min;

    document.getElementById('fwind').innerHTML = forecastData.list[4].wind.speed;

    
} //end of function
