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
        `<div class="col col-lg-4 col-md-6 mb-4">
          <div class="card p-1 my-2">
            <div class="card-img-container position-relative">
              <img src="img/pin.svg" class="pin" alt="pin">
              <img src="${url}" class="card-img-top" alt="img" style="object-fit: cover; width: 100%; height: 100%;">
            </div>
            <div class="card-body">
              <p class="card-text">${title}</p>
            </div>
          </div>
        </div>`;
      }