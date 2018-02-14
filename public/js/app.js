$(document).ready(function() { 

  var proxy = 'https://cors-anywhere.herokuapp.com/';
  var apiLinkDS = "https://api.darksky.net/forecast/4000565e85394e8dc859ece86fbf071f/-12.145598,%20-77.022311?lang=es";

  $.ajax({
    url: proxy + apiLinkDS,
    success:function(data) { console.log(data);}
  });

});