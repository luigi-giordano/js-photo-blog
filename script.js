// L'obiettivo finale di questo codice è caricare le immagini da un'API e mostrarle come card.

// Flusso di lavoro:
// 1 Effettuare una richiesta all'API per scaricare le immagini.
// 2 Mostrare le immagini come card.
// 3 Cliccando un'immagine, si apre un overlay con l'immagine ingrandita.
// 4 Chiudere l'overlay cliccando sul pulsante di chiusura.

// URL dell'API
const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=6'

// Seleziono l'elemento HTML dove verranno aggiunte le card
let cardDaStampare = document.getElementById('row-card');

// Effettuo una richiesta GET all'API utilizzando Axios, la quale preleva i dati dall'API indicata e
// ci restituirà un oggetto asincrono
axios.get(apiUrl)
.then(res => {

// Creo una funzione per aggiungere una card dentro il contenitore row-card
function printCard(postcard){

  // Destrutturo l'oggetto postcard per ottenere title e url  
    let {title, url} = postcard;
  
  // Aggiungo una nuova card all'elemento HTML
  document.getElementById('row-card').innerHTML += 
  `<div class= "col col-lg-4 col-md-6 col-sm-12 mb-4 px-3">
    <div class="card p-3 my-2 bg-white">
        <div class="card-img-container">
          <img src="img/pin.svg" class="pin" alt="pin">
          <img src="${url}" class="card-img-top" alt="img" style="width: 100%; height: 100%;">
        </div>
        <div class="card-body">
          <p class="card-text">${title}</p>
        </div>  
    </div>
  </div>`;
  }

// Ottenuti i dati restituiti dall'API, li itero richiamando la funzione printCard che li stampa dentro il contenitore
res.data.forEach(postcard => printCard(postcard))

// Variabili
  const galleryImages = document.querySelectorAll('.card-img-top');// Seleziono le immagini visibili nelle card
  const overlayImage = document.getElementById('overlay-image');// Seleziono l'immagine ingradita dell'overlay
  const overlay = document.querySelector('.overlay');// Seleziono il contenitore con l'immagine ingrandita
  const closeOverlayButton = document.getElementById('close-overlay');// Seleziono il pulsante per chiudere l'overlay

// Aggiungo un event listener a ciascuna immagine nella galleria e utilizzo src per copiare il collegamento     
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    overlayImage.src = image.src;
// Mostro l'overlay aggiungendo la classe `d-block`
    overlay.classList.add('d-block');
  });
});

// Aggiungo un event listener al pulsante di chiusura dell'overlay
closeOverlayButton.addEventListener('click', () => {
// Nascondo nuovamente l'overlay rimuovendo la classe `d-block`
  overlay.classList.remove('d-block');
  });
})