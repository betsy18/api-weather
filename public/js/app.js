window.addEventListener('load', function () {

  // declarando variables
  const responseContainer = document.getElementById('response-container');
 // geolocalizacion
 function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
   alert("Tu navegador no soporta la Geolocation");
  }
}

function showPosition(position) {
  let latitude =  position.coords.latitude 
  let Longitude =  position.coords.longitude;
}
// console.log(showPosition(latitude));

  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let apiLinkDS = "https://api.darksky.net/forecast/4000565e85394e8dc859ece86fbf071f/-12.145598,%20-77.022311?lang=es";


  fetch(proxy + apiLinkDS)
    .then(function (response) {
      return response.json();
      getJson();
    }).then(function (data) {
      console.log(data);
      success(data);
    })
    .catch(function (error) {
      handleError();
    })

  function getJson() {
    const data = JSON.parse(this.responseText);
    success(data);
  }

  function success(data) {
    const days = data.daily.data;
    for (let index in days) {
      console.log(days[index]);
      var dataComplete = days[index];
      console.log(dataComplete);
      let summary = dataComplete.summary;
      let icon = dataComplete.icon;
      let temperature = dataComplete.temperature;
      let humidity = dataComplete.humidity;
      // let snippet = dataComplete.snippet;
      let li = document.createElement('li');
      li.innerHTML = '<p>' + 'Tiempo: ' + summary + '</p>' + 'Icon: ' + icon + '</p>' + humidity ;
      responseContainer.appendChild(li);
    }
  };
 


  function handleError() {
    console.log('Lo malograste!, alejáte');
  }

});
