           /*var section = document.querySelector('section');
            var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL, true);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
                var townInfo = JSON.parse(request.response;
                loopTowns(townInfo);
            }
              function newElement(type, val, dest){
                var elem = document.createElement(type);
                elem.textContent = val;
                dest.appendChild(elem);
              }
              function generateTile(obj, dest){
                var tile = document.createElement('article');
                newElement('h3', obj['name'], tile);
                newElement('p', obj['motto'], tile);
                newElement('p', 'Year Founded: ' + obj['yearFounded'], tile);
                newElement('p', 'Population: ' + obj['currentPopulation'], tile);
                newElement('p', 'Annual Rainfall: ' + obj['averageRainfall'] + '"', tile);
                dest.appendChild(tile);
              }
              function loopTowns(jsonObj){
                var towns = jsonObj['towns'];
                for(var i =0; i < towns.length; i++){
                  if(towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
                    generateTile(towns[i], body)
                  }

                }
              }*/


              var weatherObject = new XMLHttpRequest();
              weatherObject.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);

              weatherObject.send();

              weatherObject.onload = function() {
                var weatherInfo = JSON.parse(weatherObject.responseText);
                console.log(weatherInfo);

                document.getElementById('preston').innerHTML = weatherInfo.towns[4].name;
                console.log(weatherInfo.towns[4].name);
                document.getElementById('prestonMotto').innerHTML = weatherInfo.towns[4].motto;
                console.log(weatherInfo.towns[4].motto);
                document.getElementById('prestonFounded').innerHTML = weatherInfo.towns[4].yearFounded;
                console.log(weatherInfo.towns[4].yearFounded);
                document.getElementById('prestonPop').innerHTML = weatherInfo.towns[4].currentPopulation;
                console.log(weatherInfo.towns[4].currentPopulation);
                document.getElementById('prestonRain').innerHTML = weatherInfo.towns[4].averageRainfall;
                console.log(weatherInfo.towns[4].averageRainfall);

    document.getElementById('soda').innerHTML = weatherInfo.towns[5].name;
    console.log(weatherInfo.towns[5].name);
    document.getElementById('sodaMotto').innerHTML = weatherInfo.towns[5].motto;
    console.log(weatherInfo.towns[5].motto);
    document.getElementById('sodaFounded').innerHTML = weatherInfo.towns[5].yearFounded;
    console.log(weatherInfo.towns[5].yearFounded);
    document.getElementById('sodaPop').innerHTML = weatherInfo.towns[5].currentPopulation;
    console.log(weatherInfo.towns[5].currentPopulation);
    document.getElementById('sodaRain').innerHTML = weatherInfo.towns[5].averageRainfall;
    console.log(weatherInfo.towns[5].averageRainfall);

    document.getElementById('fish').innerHTML = weatherInfo.towns[1].name;
    console.log(weatherInfo.towns[1].name);
    document.getElementById('fishMotto').innerHTML = weatherInfo.towns[1].motto;
    console.log(weatherInfo.towns[1].motto);
    document.getElementById('fishFounded').innerHTML = weatherInfo.towns[1].yearFounded;
    console.log(weatherInfo.towns[1].yearFounded);
    document.getElementById('fishPop').innerHTML = weatherInfo.towns[1].currentPopulation;
    console.log(weatherInfo.towns[1].currentPopulation);
    document.getElementById('fishRain').innerHTML = weatherInfo.towns[1].averageRainfall;
    console.log(weatherInfo.towns[1].averageRainfall);
              }//end of function



