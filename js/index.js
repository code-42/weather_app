$(function(){

// first, get geo-coordinates to pass to the weather api
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var geolon = position.coords.longitude;
            var geolat = position.coords.latitude;

            console.log("1.geolon & geolat == " + geolon + " : " + geolat);

// pass the geo-coordinates to the api data object
            var url = "//api.wunderground.com/api/"+apiKey+"/geolookup/q/"+geolat+","+geolon+".json";
            console.log("2.url == " + url);
            var weather_api = new XMLHttpRequest();
            weather_api.open("GET", url, false);
            weather_api.send(null);
            var resp = JSON.parse(weather_api.response);
            var city = resp.location.city;
            var state = resp.location.state;
            console.log("3.api city & state == " + city + state);
            
// var url = "//api.wunderground.com/api/APIKEY/conditions/q/RI/Providence.json";
            var url = "//api.wunderground.com/api/"+apiKey+"/conditions/q/"+state+"/"+city+".json";
            var weather_api = new XMLHttpRequest();
            weather_api.open("GET", url, false);
            weather_api.send(null);
            var resp = JSON.parse(weather_api.response);
            
            var loc = "Current location: " + resp.current_observation.display_location.full;
            var updated = resp.current_observation.observation_time;
            var temp = "Temperature: " + resp.current_observation.temperature_string;
            var weather = "Today's Outlook: " + resp.current_observation.weather;
            console.log("3.weather == " + resp.current_observation.weather);
            console.log("4.updated == " + updated);
            var wind = "Wind: " + resp.current_observation.wind_string;
            document.getElementById("loc").innerHTML = loc;
            document.getElementById("updated").innerHTML = updated;
            document.getElementById("temp").innerHTML = temp;
            document.getElementById("weather").innerHTML = weather;
            document.getElementById("wind").innerHTML = wind;
            
            switch (resp.current_observation.weather){
                case "Sunny":
                    document.body.style.backgroundImage = "url('http://fanaru.com/weather-fun/image/157923-weather-fun-hot-summer-day.jpg')";
                    document.body.style.color = "#008000";
                    document.getElementById("weather-data").style.color = "#000000";
                    break;
                case "Overcast":
                    document.body.style.backgroundImage = "url('resources/PartlyCloudyWeatherAppImg.jpg')";
                    document.body.style.color = "#ffffff";
                    document.getElementById("weather-data").style.color = "#ffffff";
                    break;
                case "Rain":
                    document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Background-HD-620x388.jpg')";
                    document.body.style.color = "#ffffff";
                    document.getElementById("weather-data").style.color = "#ffffff";
                    break; 
                case "Clouds":
                    document.body.style.backgroundImage = "url('https://4.bp.blogspot.com/-1rnXAQrIQgE/T7T7bB09LgI/AAAAAAAADV8/oTohLv0QMrI/s1600/clouds_guardian.jpg')";
                    document.body.style.color = "#008000";
                    document.getElementById("weather-data").style.color = "#008000";
                    break; 
                case "Mostly Cloudy":
                    document.body.style.backgroundImage = "url('resources/PartlyCloudyWeatherAppImg.jpg')";
                    //https://icons.wxug.com/data/wximagenew/d/DesertNomad/337-800.jpg')";
                    document.body.style.color = "#000000";
                    document.getElementById("weather-data").style.color = "#000000";
                    break;
                case "Partly Cloudy":
                    document.body.style.backgroundImage = "url('resources/PartlyCloudyWeatherAppImg.jpg')";
                    // https://plus.google.com/u/0/photos/albums/pe03194g3i2nplvnbdfak4dmfegdrnfms?pid=6445955005824013458&oid=107909885845251142194')";
                    // http://media.nola.com/weather_impact/photo/partly-cloudy-skyjpg-7247bd47ea724ad3.jpg')";
                    document.body.style.color = "#000000";
                    document.getElementById("weather-data").style.color = "#000000";
                    break;    
                default:
                    document.body.style.backgroundImage = "url('http://fanaru.com/weather-fun/image/157923-weather-fun-hot-summer-day.jpg')";
                    document.body.style.color = "#008000";
                    document.getElementById("weather-data").style.color = "#008000";
                }
            });        
       } 
});


