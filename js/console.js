//haalt de class 'result' binnen.
const resultElement = document.querySelector('.result');


//haalt de data op met behulp van fetch.
function showData(url) {
  fetch(url)
  .then(myData => myData.json())
  .then(data => createBootstrapCards(data));
}

function createBootstrapCards(data){
    const row = createBootstrapRow();
    //deze for loop maakt 3 cards aan en zet elke card in een column. Aan het einde wordt de column toegevoegd aan de row.
    for(let i = 0; i < data.length; i++){
        const column = createBootstrapColumn();
        const card = createBootstrapCard(data[i].img, 
            data[i].title, data[i].description, data[i].firstGame, data[i].playerCount, data[i].genres, data[i].sales);
        //voegt de card toe aan de column.
        column.appendChild(card);
        //voegt de column toe aan de row.
        row.appendChild(column);
    }
    //de row wordt toegevoegd aan het result element.
    resultElement.appendChild(row);
}

//met deze functie wordt er een row aangemaakt.
function createBootstrapRow(){
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

//maakt een column aan en voegt de classes 'flex' en aligned items stretch toe.
function createBootstrapColumn(){
  const column = document.createElement('div');
  column.classList.add('col', 'd-flex', 'align-items-stretch');
  return column;
}

//maakt 'cards' aan en voegt de benodigde data toe.
function createBootstrapCard(imageUrl, cardTitle, cardDescription, cardFirstGame, cardPlayerCount, cardGenres, cardSales){
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.classList.add('bg-color');
  cardElement.classList.add('text-white');

  const imgElement = document.createElement('img');
  imgElement.src = imageUrl
  
  imgElement.classList.add('card-img-top');

  const cardBodyElement = document.createElement('div');
  cardBodyElement.classList.add('card-body');

  const cardBodyTitleElement = document.createElement('h5');
  cardBodyTitleElement.classList.add('card-title');
  cardBodyTitleElement.textContent = cardTitle;
  const cardBodyTextElement = document.createElement('p');
  cardBodyTextElement.classList.add('card-text');
  cardBodyTextElement.textContent = cardDescription;
  const cardBodyTextFirstGame = document.createElement('p');
  cardBodyTextFirstGame.classList.add('pt-2');
  cardBodyTextFirstGame.innerHTML += '<strong>First game: </strong>' + cardFirstGame
  const cardBodyTextPlayerCount = document.createElement('p');
  cardBodyTextPlayerCount.innerHTML += '<strong>Player count: </strong>' + cardPlayerCount;
  const cardBodyTextGenres = document.createElement('p');
  cardBodyTextGenres.innerHTML += '<strong>Genres: </strong>' + cardGenres;
  const cardBodyTextSales = document.createElement('p');
  cardBodyTextSales.innerHTML += '<strong>Sales: </strong>' + cardSales;
 

  cardBodyElement.appendChild(cardBodyTitleElement);
  cardBodyElement.appendChild(cardBodyTextElement);
  cardBodyTextElement.appendChild(cardBodyTextFirstGame);
  cardBodyTextElement.appendChild(cardBodyTextPlayerCount);
  cardBodyTextElement.appendChild(cardBodyTextGenres);
  cardBodyTextElement.appendChild(cardBodyTextSales);

  cardElement.appendChild(imgElement);
  cardElement.appendChild(cardBodyElement);

  return cardElement;
}