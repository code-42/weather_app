// freecodecamp weather app 
// https://www.freecodecamp.org/challenges/show-the-local-weather

// var apiKey = "LALALA/production/web_pages/weather_app/js/keys.js"
// console.log("2.apiKey == " + apiKey);

$(function(){
// var apiKey = "c6978e88081b712d";
var tUnit = "C";
var cTemp;
var degSymbol = String.fromCharCode(176);
var msg = "Click temperature above to convert C/F";

// first, get geo-coordinates to pass to the weather api
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var geolon = position.coords.longitude;
            var geolat = position.coords.latitude;

            console.log("1.geolon & geolat == " + geolon + " : " + geolat);
            
            $("#tmp").click(function () {
                var tUnit = $("#tunit").html();
                console.log("20. " + tUnit);
                if(tUnit == "C"){
                    tUnit = "F"
                } else {
                    tUnit = "C"
                }
                $("#tunit").html(tUnit);
                if (tUnit == "F") {
                  var fTemp = Math.round(parseInt($("#temp").html()) * 9 / 5 + 32);
                  $("#temp").html(fTemp);
                } else {
                  $("#temp").html(cTemp);
                }
              });
  

// pass the geo-coordinates to the api data object
            // var url = "//api.wunderground.com/api/"+apiKey+"/geolookup/q/"+geolat+","+geolon+".json";
            var urlBase = "https://fcc-weather-api.glitch.me/api/current?";
            var url = urlBase + "lat=" + geolat + "&" + "lon=" + geolon;
            console.log("2.url == " + url);
            var weather_api = new XMLHttpRequest();
            weather_api.open("GET", url, false);
            weather_api.send(null);
            var resp = JSON.parse(weather_api.response);

            var updated = resp.dt;
            var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
            d.setUTCSeconds(updated);
            console.log("59. " + d);
            
            $("#cityName").html(resp.name);
            cTemp = Math.round(resp.main.temp * 10) / 10;
            $("#temp").html(cTemp);
            $("#deg").html(" " + degSymbol);
            $("#tunit").html(tUnit);
            $("#weather-description").html(resp.weather[0].description);
            $("#weather-icon").html(resp.weather[0].icon);
            $("#msg").html(msg);
            $("#updated").html(d.toDateString() + " " + d.toLocaleTimeString());
            

                 
                 //switch api from weatherunderground to fcc-weather-api.glitch.me
// var url = "//api.wunderground.com/api/APIKEY/conditions/q/RI/Providence.json";
            // var url = "//api.wunderground.com/api/"+apiKey+"/conditions/q/"+state+"/"+city+".json";
            // var weather_api = new XMLHttpRequest();
            // weather_api.open("GET", url, false);
            // weather_api.send(null);

            // var city = resp.location.city;
            // var state = resp.location.state;
            // console.log("3.api city & state == " + city + state);
            
// var url = "//api.wunderground.com/api/APIKEY/conditions/q/STATE/CITY.json";
            // var url = "//api.wunderground.com/api/"+apiKey+"/conditions/q/"+state+"/"+city+".json";
            var weather_api = new XMLHttpRequest();
            weather_api.open("GET", url, false);
            weather_api.send(null);
            var resp = JSON.parse(weather_api.response);

            
            // var loc = "Current location: " + resp.current_observation.display_location.full;
            // var updated = resp.current_observation.observation_time;
            // var temp = "Temperature: " + resp.current_observation.temperature_string;
            // var weather = "Today's Outlook: " + resp.current_observation.weather;
            // console.log("3.weather == " + resp.current_observation.weather);
            // console.log("4.updated == " + updated);
            // var wind = "Wind: " + resp.current_observation.wind_string;
            // document.getElementById("loc").innerHTML = loc;
            // document.getElementById("updated").innerHTML = updated;
            // document.getElementById("temp").innerHTML = temp;
            // document.getElementById("weather").innerHTML = weather;
            // document.getElementById("wind").innerHTML = wind;
            
            // switch (resp.current_observation.weather){ 
                var weather = resp.weather[0].main;
                weather = weather.toLowerCase();
               switch (weather){ 
                case "sun":
                    document.body.style.backgroundImage = "url('http://fanaru.com/weather-fun/image/157923-weather-fun-hot-summer-day.jpg')";
                    document.body.style.color = "#008000";
                    document.getElementById("weather-data").style.color = "#000000";
                    break;
                case "clear":
                    document.body.style.backgroundImage = "url('resources/PartlyCloudyWeatherAppImg.jpg')";
                    document.body.style.color = "#ffffff";
                    document.getElementById("weather-data").style.color = "#ffffff";
                    break;
                case "rain":
                    document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Background-HD-620x388.jpg')";
                    document.body.style.color = "#ffffff";
                    document.getElementById("weather-data").style.color = "#ffffff";
                    break;
                case "clouds":
                    document.body.style.backgroundImage = "url('https://4.bp.blogspot.com/-1rnXAQrIQgE/T7T7bB09LgI/AAAAAAAADV8/oTohLv0QMrI/s1600/clouds_guardian.jpg')";
                    document.body.style.color = "#008000";
                    document.getElementById("weather-data").style.color = "#008000";
                    break; 
                case "drizzle":
                    document.body.style.backgroundImage = "url('resources/PartlyCloudyWeatherAppImg.jpg')";
                    //https://icons.wxug.com/data/wximagenew/d/DesertNomad/337-800.jpg')";
                    document.body.style.color = "#000000";
                    document.getElementById("weather-data").style.color = "#000000";
                    break;
                case "snow":
                    document.body.style.backgroundImage = "url('http://media.philly.com/images/445*297/RS_galleryImages_1200x800_20170108_Winter_Weather_New_Jersey_94497_jpg_24422.jpg')";
                    // https://plus.google.com/u/0/photos/albums/pe03194g3i2nplvnbdfak4dmfegdrnfms?pid=6445955005824013458&oid=107909885845251142194')";
                    // http://media.nola.com/weather_impact/photo/partly-cloudy-skyjpg-7247bd47ea724ad3.jpg')";
                    document.body.style.color = "#000000";
                    document.getElementById("weather-data").style.color = "#000000";
                    break;
                case "thunderstorm":
                    document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Background-HD-620x388.jpg')";
                    document.body.style.color = "#ffffff";
                    document.getElementById("weather-data").style.color = "#ffffff";
                    break;
                default:
                    document.body.style.backgroundImage = "url('http://fanaru.com/weather-fun/image/157923-weather-fun-hot-summer-day.jpg')";
                    document.body.style.color = "#008000";
                    document.getElementById("weather-data").style.color = "#008000";
                }
            });        
       } 
});


