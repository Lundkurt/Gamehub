const CORS_URL = "https://noroffcors.herokuapp.com/";
const popularUrl =
  CORS_URL +
  "https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-rating&key=b80501c2ec3a4966a7d6e063cb248851";

const newUrl =
  CORS_URL +
  "https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&key=b80501c2ec3a4966a7d6e063cb248851";

const popularContainer = document.querySelector(".popular-container");
const newReleaseContainer = document.querySelector(".new-container");

async function callApi(url) {
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
  <p>${resource.platforms[0].platform.name}</p>
  <p>Rating: ${resource.rating}</p>
  <div class="price">
    <p class="featured_price">$49.99</p>
    <img src="images/addcart.png" class="off" onclick="handleClick(this)" data-set="${resource.id}" >
    </div>
  </div>
  `;
  return gameCard;
}

async function addPopularCard() {
  try {
    const results = await callApi(popularUrl);
    const games = results.results;
    console.log(games);
    const popularGames = games.slice(0, 4);
    const gameCardList = popularGames.map(createGameCard);
    popularContainer.append(...gameCardList);
    popularContainer.classList.remove("loader");
  } catch (error) {
    console.warn(error);
  }
}

addPopularCard();

async function addNewsCard() {
  try {
    const results = await callApi(newUrl);
    const games = results.results;
    const newGames = games.slice(0, 4);
    const newGamesList = newGames.map(createGameCard);
    newReleaseContainer.append(...newGamesList);
    newReleaseContainer.classList.remove("loader");
  } catch (error) {
    console.warn(error);
  }
}

addNewsCard();
