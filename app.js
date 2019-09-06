//1 Recupérer une clé API
//2 Tester l'URL dans le navigateur
//3 Afficher la reponse HTTP dans la console du navigateur avec l'objet javascript 'fetch()'

$('#formulaire').hide();
$('#formulaire').fadeIn();

const resultat = document.querySelector('#result');
const userSend = document.querySelector('#userSend');
const header = document.querySelector('.header');

const convertToCelcius = (temperatureEnKelvin) => {
  return temperatureEnKelvin - 273.15;
};

userSend.addEventListener('click', (event) => {
  event.preventDefault();
  resultat.innerHTML = '';
  resultat.style.display = 'block';
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
    console.log(data.sys.country);
    const tempInKelvin = data.main.temp;
    const tempInCelcius = convertToCelcius(tempInKelvin);
    if(tempInCelcius < 15){
      console.log('il fait en dessous de 15 degrés');
      // header.classList.add('hiver');
      // header.classList.remove('printemps', 'automne', 'été');

      $('.header').hide();
      $('.header').addClass('hiver').fadeIn();
      $('.header').removeClass('printemps', 'automne', 'été');
    }else if(tempInCelcius < 20){
      header.classList.add('printemps');
      header.classList.remove('hiver', 'automne', 'été');
      console.log('il fait en dessous de 20 degrés');
    }else if(tempInCelcius < 30){
      console.log('il fait en dessous de 30 degrés');
    }else if(tempInCelcius < 40){
      console.log('il fait en dessous de 40 degrés');
    }
    resultat.insertAdjacentHTML('beforeend', `
    <p>A ${data.name} il fait ${tempInCelcius.toFixed(2)}°, ${data.weather[0].description}</p>
      `);
  }).catch((error) => {
    console.log("Voici mon erreur:" + ' ' + error.message);
  });
})















