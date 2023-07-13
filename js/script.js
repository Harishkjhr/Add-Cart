const btnCart = document.getElementById("cart-icon ");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");


btnCart.addEventListener("click", function () {
  
  cart.classList.add("cart-active");
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});
