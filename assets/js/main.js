/* campominato */

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const gridContainer = document.querySelector('.grid');
const playButton = document.querySelector('.btn');
/* const level = document.querySelector('.select_level'); */

// let howMany = 100; //nella funzione questo valore voglio che sia dinamico

//creo una funzione per poterla evocare quando premo il bottone quindi GENERARE la griglia e non nasconderla e farla apparire
 
playButton.addEventListener('click', function(){
      gridContainer.innerHTML= '';
      const cellNumber = document.querySelector('.form-select').value; // il valore del select lo uso per indicare quante celle voglio nella funzione
      generateGrid(gridContainer, cellNumber);  
  });
      

function generateGrid (where, howMany){
      for (let i = 0; i < howMany; i++) {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.innerText = i+1;
            where.append(cellElement);
}
}
