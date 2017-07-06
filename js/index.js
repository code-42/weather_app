$(document).ready(function(){
    var long, lat;
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            long = position.coords.longitude;
            lat = position.coords.latitude;
            $("#data").html("longitude: " + long + "<br>latitude: " + lat);
        });
    }
    
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=5224151&APPID=712e37ac7b186771a8a0c984185073cf";
    
    $.getJSON(apiUrl, function(data){
        alert(data.coord.lon + " " + data.coord.lat);
    });
    
});