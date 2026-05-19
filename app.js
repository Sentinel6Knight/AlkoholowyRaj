// app.js

// KOSZYK
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart(){
  document.getElementById("cartCount").innerText = cart.length;
}

function addToCart(name, price){

  cart.push({
    name,
    price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

  alert(name + " dodano do koszyka");
}

updateCart();


// SLIDER

let slides = [
  "MainPage_1.jpg",
  "MainPage_2.jpg"
];

let current = 0;

setInterval(() => {

  current++;

  if(current >= slides.length){
    current = 0;
  }

  document.getElementById("slider").src = slides[current];

}, 4000);
