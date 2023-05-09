console.log('Main JS loaded');

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

if (window.location.pathname == "/PC/pc-epic.html") {
  fetch("https://mbo-sd.nl/period3-fetch/games-pc-epic-games")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //dumps info of games
      document.querySelector('.card-h3-info').textContent = data[0].title;
      document.querySelector('.game-image').src = data[0].img;
      document.querySelector('.card-p-info').textContent = data[0].description;
      document.querySelector('.game-price').textContent = data[0].price;

      document.querySelector('.card-h3-info-1').textContent = data[1].title;
      document.querySelector('.game-image-1').src = data[1].img;
      document.querySelector('.card-p-info-1').textContent = data[1].description;
      document.querySelector('.game-price-1').textContent = data[1].price;

      document.querySelector('.card-h3-info-2').textContent = data[2].title;
      document.querySelector('.game-image-2').src = data[2].img;
      document.querySelector('.card-p-info-2').textContent = data[2].description;
      document.querySelector('.game-price-2').textContent = data[2].price;
    });
}

if (window.location.pathname == "/PC/pc-riot.html") {
  fetch("https://mbo-sd.nl/period3-fetch/games-pc-riot-games")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //dumps info of games
      document.querySelector('.card-h3-info').textContent = data[0].title;
      document.querySelector('.game-image').src = data[0].img;
      document.querySelector('.card-p-info').textContent = data[0].description;
      document.querySelector('.game-price').textContent = data[0].price;

      document.querySelector('.card-h3-info-1').textContent = data[1].title;
      document.querySelector('.game-image-1').src = data[1].img;
      document.querySelector('.card-p-info-1').textContent = data[1].description;
      document.querySelector('.game-price-1').textContent = data[1].price;

      document.querySelector('.card-h3-info-2').textContent = data[2].title;
      document.querySelector('.game-image-2').src = data[2].img;
      document.querySelector('.card-p-info-2').textContent = data[2].description;
      document.querySelector('.game-price-2').textContent = data[2].price;
    });
}

if (window.location.pathname == "/PC/pc-blizzard-entertainment.html") {
  fetch("https://mbo-sd.nl/period3-fetch/games-pc-blizzard-entertainment")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //dumps info of overwatch
      document.querySelector('.card-h3-info').textContent = data[0].title;
      document.querySelector('.game-image').src = data[0].img;
      document.querySelector('.card-p-info').textContent = data[0].description;
      document.querySelector('.game-price').textContent = data[0].price;

      //dumps info of diablo
      document.querySelector('.card-h3-info-1').textContent = data[1].title;
      document.querySelector('.game-image-1').src = data[1].img;
      document.querySelector('.card-p-info-1').textContent = data[1].description;
      document.querySelector('.game-price-1').textContent = data[1].price;

      //info of WoW
      document.querySelector('.card-h3-info-2').textContent = data[2].title;
      document.querySelector('.game-image-2').src = data[2].img;
      document.querySelector('.card-p-info-2').textContent = data[2].description;
      document.querySelector('.game-price-2').textContent = data[2].price;
    });
}