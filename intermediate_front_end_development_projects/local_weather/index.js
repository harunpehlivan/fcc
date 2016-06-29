$(document).ready(function(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showForecast, showError);
  }
  function showForecast(position){
    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyCrTwmvBdez8KIplFv7v6CcBHSFYB96WFs", function(data){
      showLocation(data.results[0]);
    });
    $.getJSON("https://api.forecast.io/forecast/752d72f732230515fda08531e4d58c37/" + position.coords.latitude + "," + position.coords.longitude + "?units=auto&callback=?", function(data){
      showTime(data.currently.time);
      $("#summary").html(data.currently.summary);
      $("#temperature").html(Math.round(data.currently.temperature));
      showUnits(data.flags.units);
      showIcon(data.currently.icon, "#icon");
      showBackground(data.currently.icon);
      showWindSpeed(data.flags.units, data.currently.windSpeed);
      $("#precipitation").html(Math.round(data.currently.precipProbability * 100) + "%");
      showDayByDayForecast(data.daily);
    });
  }
  function showError(error){
    switch(error.code){
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request for Geolocation timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }
  function showLocation(location){
    for(i = 0; i < location.address_components.length; i++){
      if(location.address_components[i].types[0] == "locality"){
        $("#location").html(location.address_components[i].long_name);
      }
    }
  }
  function showTime(time){
    var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = dayArr[new Date(time*1000).getDay()];
    var hoursArr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
    var hours;
    var minutesArr = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"];
    var minutes;
    if(new Date(time*1000).getHours() < 10){
      hours = hoursArr[new Date(time*1000).getHours()];
    }else{
      hours = new Date(time*1000).getHours();
    }
    if(new Date(time*1000).getMinutes() < 10){
      minutes = minutesArr[new Date(time*1000).getMinutes()];
    }else{
      minutes = new Date(time*1000).getMinutes();
    }
    $("#time").html(day + ", " + hours + ":" + minutes);
  }
  function showUnits(unit){
    if(unit == "us"){
      $("#unit1").html("°F /");
      $("#unit2").html("°C");
    }else{
      $("#unit1").html("°C /");
      $("#unit2").html("°F");
    }
  }
  function showWindSpeed(units, windSpeed){
    switch(units){
      case "us":
        $("#windspeed").html(Math.round(windSpeed) + " mph");
        break;
      case "si":
        $("#windspeed").html(Math.round(windSpeed * 3.6) + " km/h");
        break;
      case "ca":
        $("#windspeed").html(Math.round(windSpeed) + " km/h");
        break;
      case "uk2":
        $("#windspeed").html(Math.round(windSpeed) + " mph");
        break;
    }
  }
  function showBackground(icon){
    switch(icon){
      case "clear-day":
        $("#current").addClass("amber");
        break;
      case "clear-night":
        $("#current").addClass("purple");
        break;
      case "rain":
        $("#current").addClass("blue-grey");
        break;
      case "snow":
        $("#current").addClass("blue-grey");
        break;
      case "sleet":
        $("#current").addClass("blue-grey");
        break;
      case "wind":
        $("#current").addClass("teal");
        break;
      case "fog":
        $("#current").addClass("teal");
        break;
      case "cloudy":
        $("#current").addClass("teal");
        break;
      case "partly-cloudy-day":
        $("#current").addClass("green");
        break;
      case "partly-cloudy-night":
        $("#current").addClass("indigo");
        break;
      case "hail":
        $("#current").addClass("red");
        break;
      case "thunderstorm":
        $("#current").addClass("red");
        break;
      case "tornado":
        $("#current").addClass("red");
        break;
      default:
        $("#current").addClass("deep-orange");
    }
  }
  function showDayByDayForecast(daily){
    for(i = 0; i <= 7; i++){
      showDay(daily.data[i].time, "#day-" + i);
      showIcon(daily.data[i].icon, "#icon-day-" + i);
      showTempMax(daily.data[i].temperatureMax, "#tempMax-day-" + i);
      showTempMin(daily.data[i].temperatureMin, "#tempMin-day-" + i);
    }
  }
  function showDay(time, id){
    var dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var day = dayArr[new Date(time*1000).getDay()];
    $(id).html(day);
  }
  function showIcon(icon, id){
    switch(icon){
      case "clear-day":
        $(id).addClass("wi wi-forecast-io-clear-day");
        break;
      case "clear-night":
        $(id).addClass("wi wi-forecast-io-clear-night");
        break;
      case "rain":
        $(id).addClass("wi wi-forecast-io-rain");
        break;
      case "snow":
        $(id).addClass("wi wi-forecast-io-snow");
        break;
      case "sleet":
        $(id).addClass("wi wi-forecast-io-sleet");
        break;
      case "wind":
        $(id).addClass("wi wi-forecast-io-wind");
        break;
      case "fog":
        $(id).addClass("wi wi-forecast-io-fog");
        break;
      case "cloudy":
        $(id).addClass("wi wi-forecast-io-cloudy");
        break;
      case "partly-cloudy-day":
        $(id).addClass("wi wi-forecast-io-partly-cloudy-day");
        break;
      case "partly-cloudy-night":
        $(id).addClass("wi wi-forecast-io-partly-cloudy-night");
        break;
      case "hail":
        $(id).addClass("wi wi-forecast-io-hail");
        break;
      case "thunderstorm":
        $(id).addClass("wi wi-forecast-io-thunderstorm");
        break;
      case "tornado":
        $(id).addClass("wi wi-forecast-io-tornado");
        break;
      default:
        $(id).addClass("wi wi-na");
    }
  }
  function showTempMax(temp, id){
    $(id).html(Math.round(temp) + "°");
  }
  function showTempMin(temp, id){
    $(id).html(Math.round(temp) + "°");
  }
});
