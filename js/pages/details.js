const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const CORS_URL = "https://noroffcors.herokuapp.com/";
const url =
  CORS_URL +
  `https://api.rawg.io/api/games/${id}?key=b80501c2ec3a4966a7d6e063cb248851`;

const detailsContainer = document.querySelector(".product-specs");

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);
    createDetails(results);
    setTitle(results);
  } catch (error) {
    console.warn(error);
  }
}

fetchDetails();

function setTitle(resource) {
  document.title = `GameHub | ${resource.name}`;
}
function createDetails(resource) {
  detailsContainer.innerHTML = `<div class="product"> <img src="${resource.background_image}" alt="${resource.name}" />
    <div class="info">
      <h1>${resource.name}</h1>
      <p>${resource.platforms[0].platform.name}</p>
      <p>${resource.genres[0].name}</p>
      <p>Rating: ${resource.rating}</p>
      <p>
      </p>
    </div>
    <div class="buy-it">
      <h3 class="price">$49.99</h3>
      <input type="submit" id="add-cart" value="Add to cart" onclick="updateButton(event)"/>
    </div>
    </div>
    <div class="description"> ${resource.description}</div>
    <div class="product-reviews">
          <h2>Reviews</h2>
          <div class="review">
            <h3>Aegeon Targaryen</h3>
            <img src="images/stars.png" alt="rating stars" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus incidunt sed at, in aperiam ad illum unde reprehenderit
              quas reiciendis ex repudiandae.
            </p>
          </div>
        </div>`;
}
