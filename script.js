const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=6'
let cardDaStampare = document.getElementById('row-card')

axios.get(apiUrl)
.then(res => {
  // console.log(res.data)
  res.data.forEach(postcard => printCard(postcard))
})

function printCard(postcard){
  let {title, url} = postcard;

  document.getElementById('row-card').innerHTML += 
      `<div class= "col col-lg-4 col-md-6 col-sm-12 mb-4 px-3">
        <div class="card p-3 my-2 bg-white">
            <div class="card-img-container">
              <img src="img/pin.svg" class="pin" alt="pin">
              <img src="${url}" class="card-img-top" alt="img" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
            <div class="card-body">
              <p class="card-text">${title}</p>
            </div>  
        </div>
        </div>`;
      }