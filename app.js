let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  update();
}

function update(){

  document.getElementById("cartCount").innerText = cart.length;

  let box = document.getElementById("cart");
  let total = 0;

  box.innerHTML = "";

  cart.forEach(i=>{
    total += i.price;
    box.innerHTML += "<p>" + i.name + " - " + i.price + " zł</p>";
  });

  document.getElementById("total").innerText =
    "Razem: " + total.toFixed(2) + " zł";
}

/* alkomat */
function calc(){

  let w = document.getElementById("w").value;
  let d = document.getElementById("d").value;
  let h = document.getElementById("h").value;

  let r = ((d*10)/w) - (h*0.15);

  if(r < 0) r = 0;

  document.getElementById("r").innerText = r.toFixed(2) + "‰";
}

/* slider */
let slides = ["MainPage_1.jpg","MainPage_2.jpg"];
let i = 0;

setInterval(()=>{
  let img = document.getElementById("slider");
  if(!img) return;

  i++;
  if(i >= slides.length) i = 0;

  img.src = slides[i];
},3000);

update();
