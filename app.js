let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= KOSZYK ================= */

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert(name + " dodano do koszyka");
}

function updateCart() {
  const el = document.getElementById("cartCount");
  if (el) el.innerText = cart.length;
}

/* ================= KOSZYK STRONA ================= */

function loadCart() {
  const list = document.getElementById("cartItems");
  if (!list) return;

  let total = 0;
  list.innerHTML = "";

  cart.forEach((item, i) => {
    total += item.price;

    list.innerHTML += `
      <div class="card">
        <h3>${item.name}</h3>
        <p>${item.price.toFixed(2)} zł</p>
        <button onclick="removeItem(${i})">Usuń</button>
      </div>
    `;
  });

  const t = document.getElementById("total");
  if (t) t.innerText = "Razem: " + total.toFixed(2) + " zł";
}

function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCart();
}

/* ================= SLIDER ================= */

let slides = ["MainPage_1.jpg", "MainPage_2.jpg"];
let i = 0;

function startSlider() {
  const img = document.getElementById("slider");
  if (!img) return;

  setInterval(() => {
    i = (i + 1) % slides.length;
    img.src = slides[i];
  }, 4000);
}

/* ================= ALKOMAT ================= */

function calculateAlcohol() {
  let w = parseFloat(document.getElementById("weight").value);
  let d = parseFloat(document.getElementById("drinks").value);
  let h = parseFloat(document.getElementById("hours").value);

  if (!w || !d) return;

  let result = ((d * 10) / w) - (h * 0.15);
  if (result < 0) result = 0;

  document.getElementById("result").innerText =
    "Poziom alkoholu: " + result.toFixed(2) + "‰";
}

/* ================= INIT ================= */

updateCart();
startSlider();
