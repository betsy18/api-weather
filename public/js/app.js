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
      .then(function (response) {
        return response.json();
        getJson();
      }).then(function (data) {
        console.log(data);
        success(data);
      })
      .catch(function (error) {
        handleError();
      });
  }


  function getJson() {
    const data = JSON.parse(this.responseText);
    success(data);
  }

  function success(data) {
    const day = data.currently;
    const zone = data.timezone;
    let icon = day.icon;
    let temperature = Math.floor((day.temperature - 32) * 5 / 9);
    let summary = day.summary;
    let humidity = (day.humidity * 100);
    let uvIndex = day.uvIndex;
    let pressure = day.pressure;
    let div = document.createElement('div');
    div.className = 'li';
    div.innerHTML = `
      <figure>
      <img class="img-reponsive icon" src="../assets/icon/${icon}.svg">
      </figure>
      <p>${zone}</p>
      <h1>${temperature}°</h1>${summary}
      <div>Humedad: ${humidity}%
      <br>Uv: ${uvIndex}
      <br>Pressure: ${pressure}</div>`;
    responseContainer.appendChild(div);
  };

  function handleError() {
    console.log('Lo malograste!, aléjate');
  }
});
