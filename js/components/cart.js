if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", addButton);
  console.log("isloading");
} else {
  addButton();
  console.log("isready");
}

function addButton() {
  const addCardBtn = document.querySelector(".add-cart");
  console.log(addCardBtn);
  for (let i = 0; i < 20; i++) {
    const checked = addCardBtn[i];
    console.log(checked);
    // checked.addEventListener("click", added);
  }
}

function added(event) {
  const buttonClicked = event.target;
  buttonClicked.innerHTML += "✓";
}
