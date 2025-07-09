const button = document.getElementById(`accendi`); // Dichiaro una variabile che accede all'id dell'elemento html button
const img = document.getElementById(`lampOff`); // Dichiaro una variabile che accede all'id dell'elemento html img

button.addEventListener(`click`, function () {
  // Aggiungo un EventListener
  img.src = `./img/yellow_lamp.png`; // Punto a SRC dell'elemento img e lo cambio
  img.alt = `lampOn`; // Punto ad ALT dell'elemento img e lo cambio
});

button.addEventListener(`click`, function () {
  if ((img.src = `./img/yellow_lamp.png`)) {
    button.innerText = `Spegni`;
  }
});
