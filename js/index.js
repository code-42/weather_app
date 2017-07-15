$(document).ready(function(){

// first, get geo-coordinates to pass to the weather api
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var geolon = position.coords.longitude;
            var geolat = position.coords.latitude;

            console.log("1.geolon & geolat == " + geolon + " : " + geolat);

            var apiKey = "c6978e88081b712d";

            var url = "//api.wunderground.com/api/"+apiKey+"/geolookup/q/"+geolat+","+geolon+".json";
            console.log("2.url == " + url);
            var weather_api = new XMLHttpRequest();
            weather_api.open("GET", url, false);
            weather_api.send(null);
            var resp = JSON.parse(weather_api.response);
            var city = resp.location.city;
            var state = resp.location.state;
            console.log("3.api city & state == " + city + state);
            
            // var url = "//api.wunderground.com/api/c6978e88081b712d/conditions/q/RI/Providence.json";
            var url = "//api.wunderground.com/api/"+apiKey+"/conditions/q/"+state+"/"+city+".json";
            var weather_api = new XMLHttpRequest();
            weather_api.open("GET", url, false);
            weather_api.send(null);
            var resp = JSON.parse(weather_api.response);
            
            var loc = "Current location: " + resp.current_observation.display_location.full;
            var time = resp.current_observation.observation_time;
            var temp = "Temperature: " + resp.current_observation.temperature_string;
            var weather = "Today's Outlook: " + resp.current_observation.weather;
            console.log("3.weather == " + resp.current_observation.weather);
            console.log("4.time == " + time);
            var wind = "Wind: " + resp.current_observation.wind_string;
            document.getElementById("loc").innerHTML = loc;
            document.getElementById("time").innerHTML = time;
            document.getElementById("temp").innerHTML = temp;
            document.getElementById("weather").innerHTML = weather;
            document.getElementById("wind").innerHTML = wind;
            
            switch (resp.current_observation.weather){
                case "Sunny":
                    document.body.style.backgroundImage = "url('http://fanaru.com/weather-fun/image/157923-weather-fun-hot-summer-day.jpg')";
                    document.body.style.color = "green";
                    document.getElementById("weather-data").style.color = "#000000";
                    break;
                case "Overcast":
                    document.body.style.backgroundImage = "url('http://www.sitkanature.org/wordpress/wp-content/gallery/20100923/20100923-overcast-1.jpg')";
                    document.body.style.color = "#ffffff";
                    document.getElementById("weather-data").style.color = "#ffffff";
                    break;
                case "Rain":
                    document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Weather-Background-HD-620x388.jpg')";
                    document.body.style.color = "#ffffff";
                    document.getElementById("weather-data").style.color = "#ffffff";
                    break;    
                }
            });        
       } 
});


// 	jQuery(document).ready(function($) {
// 	  $.ajax({
// 	  url : "http://api.wunderground.com/api/c6978e88081b712d/conditions/q/RI/Providence.json",
//  http://api.wunderground.com/api/c6978e88081b712d/geolookup/q/37.776289,-122.395234.json
// 	  dataType : "jsonp",
// 	  success : function(parsed_json) {
// 	  var location = parsed_json['location']['city'];
// 	  var temp_f = parsed_json['current_observation']['temp_f'];
// 	  alert("Current temperature in " + location + " is: " + temp_f);
// 	  }
// 	  });
// 	});

// outside scope
            // var geoUrl = "http://api.openweathermap.org/data/2.5/weather?lon="+geolon+"&lat="+geolat+"&APPID=712e37ac7b186771a8a0c984185073cf";
            // var geoUrl = "http://api.wunderground.com/api/c6978e88081b712d/geolookup/q/"+geolon+","+geolat+".json"
            // console.log("2.geoUrl == " + geoUrl);        

// pass the geo-coordinates to the api data object
            // var url = "http://api.openweathermap.org/data/2.5/weather";
            // var data = {"appid":"a806a6b5e2943ee6f6d7e4a1d752ffbb", 
                        // "zip":"02908,us", 
                        // "units":"imperial",
                        
           // document.getElementById("icon").innerHTML = "<img src='"+icon+"' alt='icon'/>";                        