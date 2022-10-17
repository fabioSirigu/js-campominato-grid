/* campominato */

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.

const playButton = document.querySelector('.btn');
const sectionGame = document.querySelector('section');
playButton.addEventListener('click', function () {
      sectionGame.className = 'active';
})

// seleziono il container dove metto le cell
const gridContainer = document.querySelector('.container_cell');
// stabilisco il numero delle celle
let cellNumber = 100;


for (let i = 1; i <= cellNumber; i++) {
      const numberInsideCell = i;
      //creo l'elemento e gli assegno la classe
      const cellElement = document.createElement('div');
      cellElement.className = 'cell';
      // inserisco gli elementi creati dentro al container e dentro gli alementi i numeri
      gridContainer.append(cellElement);
      cellElement.append(numberInsideCell);
}

//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.