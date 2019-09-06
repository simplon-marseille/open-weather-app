//1 Recupérer une clé API
//2 Tester l'URL dans le navigateur
//3 Afficher la reponse HTTP dans la console du navigateur avec l'objet javascript 'fetch()'

const resultat = document.querySelector('#result');
const userSend = document.querySelector('#userSend');


const convertToCelcius = (temperatureEnKelvin) => {
  return temperatureEnKelvin - 273.15;
};

userSend.addEventListener('click', (event) => {
  event.preventDefault();
  resultat.innerHTML = '';
  const userInput = document.querySelector('#userInput').value;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=d578d6888b57e79f878b7d5bf8517065`;
  fetch(URL)
  .then((response) => {
    if(response.ok){
      console.log(response);
      return response.json();
    }else{
      alert('error:' + '' + response.status);
      console.log(response);
    }
  })
  .then((data) => {
    const tempInKelvin = data.main.temp;
    const tempInCelcius = convertToCelcius(tempInKelvin);
    resultat.insertAdjacentHTML('beforeend', `
    <p>A ${data.name} il fait ${tempInCelcius.toFixed(2)} degrés, ${data.weather[0].description}</p>
      `);
  }).catch((error) => {
    console.log("Voici mon erreur:" + ' ' + error.message);
  });
})















