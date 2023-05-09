console.log('mainloaded');
const mobosDataElement = document.querySelector('.mobo-data');

function fetchMobo(url){
    fetch(url)
    .then(myData => myData.json())
    .then(myJsonData => showMobo(myJsonData))
}

function showMobo(myJsonData){
    console.log(myJsonData);
    for (let i = 0; i < myJsonData.length; i++) {
        const game = myJsonData[i];
        const card = createCard(game);
        mobosDataElement.innerHTML += card;
    }
}

function createCard(game){
    const card = `
    <div class="col-md-4 col-sm-6">
            <div class="card">
                <img class="card-img-top" src="${game.img}" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">${game.title}</h4>
                    <p class="card-text">${game.description}</p>
                </div>
            </div>
        </div>
    
    `;
    return card;
}