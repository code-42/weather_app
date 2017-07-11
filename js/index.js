$(document).ready(function(){

// first, get geo-coordinates to pass to the weather api
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var geolon = position.coords.longitude;
            var geolat = position.coords.latitude;

            console.log("1.geolon & geolat == " + geolon + " : " + geolat);
            var geoUrl = "https://api.openweathermap.org/data/2.5/weather?lon="+geolon+"&lat="+geolat+"&APPID=712e37ac7b186771a8a0c984185073cf";
            console.log("2.geoUrl == " + geoUrl);        

// pass the geo-coordinates to the api data object
            var url = "https://api.openweathermap.org/data/2.5/weather";
            var data = {"appid":"a806a6b5e2943ee6f6d7e4a1d752ffbb", 
                        "zip":"02908,us", 
                        "units":"imperial",
                        "lon":geolon,
                        "lat":geolat
                        };

// the ajax call to the weather api returns a json object 
            $.ajax({
                url:url,
                data:data,
                success: function(response) {
                    console.log("3.response == " + response.main.temp + " " + response.coord.lon + " " + response.coord.lat);

// display the values returned from the weather api
                $("#geodata").html("longitude: " + geolon + "<br>latitude: " + geolat);
                $("#tempr").html(response.main.temp);
                
                }
            });        
       }); 
    }
});

