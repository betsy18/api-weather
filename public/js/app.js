window.addEventListener('load', function () {
  let proxy = 'https://cors-anywhere.herokuapp.com/';
  let apiLinkDS = "https://api.darksky.net/forecast/4000565e85394e8dc859ece86fbf071f/-12.145598,%20-77.022311?lang=es";

  fetch(proxy + apiLinkDS)
  .then(function (response) {
    return response.json();
    getJson();
  }).then(function (data) {
    console.log(data);
    success();
  })
  .catch(function (error) {
    handleError();
  })

  function success(data) {
    console.log(data);
    console.log('muestra datos');
  }

  function handleError() {
    console.log('Lo malograste!, alejáte');
  }

});
