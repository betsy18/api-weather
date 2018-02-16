window.addEventListener('load', function() {
  // llamando a la funcion
  getLocation();

  // declarando variables
  const responseContainer = document.getElementById('response-container');

  // geolocalizacion
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert('Tu navegador no soporta la Geolocalización');
    }
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let apiLinkDS = `https://api.darksky.net/forecast/4000565e85394e8dc859ece86fbf071f/${lat},${lng}?lang=es`;

    fetch(proxy + apiLinkDS)
      .then(function(response) {
        return response.json();
        getJson();
      }).then(function(data) {
        console.log(data);
        success(data);
      })
      .catch(function(error) {
        handleError();
      });
  }


  function getJson() {
    const data = JSON.parse(this.responseText);
    success(data);
  }

  function getDay() {
    const current = new Date();
    let acumu = 0;
    const currentDay = current.getDay();
    const weekDay = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    return weekDay[currentDay];
    let test = weekDay[current];
    test = acumu + acumu;
    console(test);
  }

  function success(data) {
    const days = data.daily.data;
    for (let index in days) {
      console.log(days[index]);
      let dataComplete = days[index];
      console.log(dataComplete);
      let currentDay = getDay();
      console.log(currentDay);
      let summary = dataComplete.summary;
      let icon = dataComplete.icon;
      let temperatureMaxCelsius = Math.floor((dataComplete.temperatureMax - 32) * 5 / 9);
      let temperatureMinCelsius = Math.floor((dataComplete.temperatureMin - 32) * 5 / 9);
      let li = document.createElement('li');
      li.className = 'li';
      li.innerHTML = `<img class="text-left img-icon" src="../../assets/icon/${icon}.svg">
      ${currentDay}   
      Max: ${temperatureMaxCelsius}° 
      Min: ${temperatureMinCelsius}°</img>`;
      responseContainer.appendChild(li);
    }
  };

  function handleError() {
    console.log('Lo malograste!, aléjate');
  }
});
