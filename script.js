// URL dell'API
const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=6'

// Elemento HTML dove verranno aggiunte le card
let cardDaStampare = document.getElementById('row-card');

// Effettuo una richiesta GET all'API utilizzando Axios
axios.get(apiUrl)
.then(res => {
// Itero sui dati ricevuti dalla risposta dell'API e creo una card per ciascun oggetto
  res.data.forEach(postcard => printCard(postcard))

// Variabili
  const overlay = document.querySelector('.overlay');// Contenitore con l'immagine ingrandita
  const closeOverlayButton = document.getElementById('close-overlay');
  const galleryImages = document.querySelectorAll('.card-img-top');
  const overlayImage = document.getElementById('overlay-image');

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

// Creo una funzione per aggiungere una card dentro il contenitore row-card
function printCard(postcard){

// Destrutturo l'oggetto postcard per ottenere `title` e `url`  
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

// L'obiettivo finale di questo codice è caricare le immagini da un'API e mostrarle come card.
// Quando clicco un'immagine, questa viene mostrata ingrandita in un overlay.
// L'overlay può essere chiuso con un pulsante.