const btnCart = document.getElementById("cart-icon ");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");


btnCart.addEventListener("click", function () {
  
  cart.classList.add("cart-active");
});

btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
  loadContent();

}

function loadContent(){
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });
