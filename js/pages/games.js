const gamehubApiUrl =
  "https://gamehub-api.no/wp-json/wc/v3/products?consumer_key=ck_7fd3707e58298a206c626a08a2378274094b3577&consumer_secret=cs_e0d2d2b913224ef9c7d06da92b22ad35dc7053f2";

const gamesContainer = document.querySelector(".games-flex");

async function callApi() {
    try {
        const response = await fetch(gamehubApiUrl)
        const data = await response.json();
        console.log(data);
        postGames(data);

    } catch {
        console.warn("error");
        gamesContainer.innerHTML = validateMessage("failed to fetch products", "error");
        gamesContainer.classList.remove("loader");
    }
}
callApi()



function filtering() {
    
}


function postGames(resource) {
    gamesContainer.classList.remove("loader");

    resource.forEach(function(game) {
        gamesContainer.innerHTML += 
        `<div class="game"><a href="details.html?id=${game.id}">
        <img class="featured_image" src="${game.images[0].src}" alt="${game.name}"/></a>
      <h3 class="featured_title">${game.name}</h3>
      <p>${game.tags[0].name}</p>
      <div class="price">
        <p class="featured_price">${game.price}kr</p>
        <img src="images/addcart.png" class="off" onclick="handleClick(this)" data-set="${game.id}" >
      </div>
      </div>
      `
        
    });

}