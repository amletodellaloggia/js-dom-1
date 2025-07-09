const button = document.getElementById(`accendi`); // Dichiaro una variabile che accede all'id dell'elemento html button
const img = document.getElementById(`lampOff`); // Dichiaro una variabile che accede all'id dell'elemento html img

button.addEventListener(`click`, function () {
  // Aggiungo un EventListener
  if (button.innerText === `Accendi`){ // Con If verifico che il testo di button sia 'Accendi' per eseguire le sue modifiche:
  img.src = `./img/yellow_lamp.png`; // Punto a SRC dell'elemento img e lo cambio
  img.alt = `lampOn`; // Punto ad ALT dell'elemento img e lo cambio
  button.innerText = `Spegni`; // Punto al testo di button e lo cambio
  }
 else if (button.innerText === `Spegni`)  { // Con Else If eseguo una verifica sempre sull testo di button, per eseguire le modifiche che mi riportano allo stato iniziale
	  button.innerText = `Accendi`;
      img.src = `./img/white_lamp.png`; 
      img.alt = `lampOff`; 
    };
});