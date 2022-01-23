const gamehubApiUrl =
  "https://gamehub-api.no/wp-json/wc/v3/products?consumer_key=ck_7fd3707e58298a206c626a08a2378274094b3577&consumer_secret=cs_e0d2d2b913224ef9c7d06da92b22ad35dc7053f2";

const gamesContainer = document.querySelector(".games-flex");

async function callApi() {
  const response = await fetch(gamehubApiUrl);
  const data = await response.json();

  return data;
}

function createGameCard(resource) {
  const gameCard = document.createElement("div");
  gameCard.classList.add("game");
  gameCard.innerHTML = `<a href="details.html?id=${resource.id}">
    <img class="featured_image" src="${resource.images[0].src}" alt="${resource.name}"/></a>
  <h3 class="featured_title">${resource.name}</h3>
  <div class="price">
    <p class="featured_price">${resource.price}kr</p>
    <img src="images/addcart.png" class="off" onclick="handleClick(this)" data-set="${resource.id}" >
  </div>
  `;
  return gameCard;
}

async function makeListing() {
  try {
    const results = await callApi();
    const gameCardList = results.map(createGameCard);
    console.log(results);
    gamesContainer.append(...gameCardList);
    gamesContainer.classList.remove("loader");
  } catch (error) {
    console.warn(error);
  }
}

makeListing();
