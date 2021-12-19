const CORS_URL = "https://noroffcors.herokuapp.com/";
const url =
  CORS_URL +
  "https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&key=b80501c2ec3a4966a7d6e063cb248851";

const gamesContainer = document.querySelector(".games-flex");

async function callApi() {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function createGameCard(resource) {
  const gameCard = document.createElement("div");
  gameCard.classList.add("game");
  gameCard.innerHTML = `<a href="details.html?id=${resource.id}">
    <img class="featured_image" src="${resource.background_image}" alt="${resource.name}"/></a>
  <h3 class="featured_title">${resource.name}</h3>
  <p>${resource.platforms[1].platform.name}</p>
  <p>Rating: ${resource.rating}</p>
  <div class="price">
    <p class="featured_price">$49.99</p>
    <img src="images/addcart.png" class="off" onclick="handleClick(this)" data-set="${resource.id}" >
  </div>
  `;
  return gameCard;
}

async function makeListing() {
  try {
    const results = await callApi();
    const games = results.results;
    const gameCardList = games.map(createGameCard);
    console.log(games);
    gamesContainer.append(...gameCardList);
    gamesContainer.classList.remove("loader");
  } catch (error) {
    console.warn(error);
  }
}

makeListing();
