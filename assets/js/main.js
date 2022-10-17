/* campominato */

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const playButton = document.querySelector('.btn');
/* const level = document.querySelector('.select_level'); */

let numCell = 100; //nella funzione questo valore voglio che sia dinamico

//creo una funzione per poterla evocare quando premo il bottone quindi GENERARE la griglia e non nasconderla e farla apparire
  
      for (let i = 1; i <= numCell; i++) {
            const numberInsideCell = i;
            //creo l'elemento e gli assegno la classe
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            // inserisco gli elementi creati dentro al container e dentro gli alementi i numeri
            const gridContainer = document.querySelector('.grid')
            gridContainer.append(cellElement);
            cellElement.append(numberInsideCell);
      } 





