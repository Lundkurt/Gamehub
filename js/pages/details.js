const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const gamehubApiUrl =
  `https://gamehub-api.no/wp-json/wc/v3/products/${id}?consumer_key=ck_7fd3707e58298a206c626a08a2378274094b3577&consumer_secret=cs_e0d2d2b913224ef9c7d06da92b22ad35dc7053f2`;

const detailsContainer = document.querySelector(".product-specs");

async function fetchDetails() {
  try {
    const response = await fetch(gamehubApiUrl);
    const results = await response.json();
    console.log(results);
    createDetails(results);
    setTitle(results);
  } catch (error) {
    console.warn(error);
  }
}
function loop(item) {
  html = ""
  html += item.name;
  return html

}
fetchDetails();

function setTitle(resource) {
  document.title = `GameHub | ${resource.name}`;
}
function createDetails(resource) {
  detailsContainer.innerHTML = `<div class="product"> <img src="${resource.images[0].src}" alt="${resource.name}" />
    <div class="info">
      <h1>${resource.name}</h1>
      <p>${resource.tags[0].name}</p>
      <p>
      </p>
    </div>
    <div class="buy-it">
      <h3 class="price">${resource.price}kr</h3>
      <input type="submit" id="add-cart" value="Add to cart"/>
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