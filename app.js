// =========================
// KOSZYK
// =========================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCart(){

    let count = document.getElementById("cartCount");

    if(count){
        count.innerText = cart.length;
    }
}

function addToCart(name, price){

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCart();

    alert(name + " dodano do koszyka!");
}

// =========================
// WYŚWIETLANIE KOSZYKA
// =========================

function loadCart(){

    let list = document.getElementById("cartItems");

    if(!list) return;

    let total = 0;

    list.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        list.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>${item.price.toFixed(2)} zł</p>

                <button onclick="removeItem(${index})">
                    Usuń
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText =
        "Razem: " + total.toFixed(2) + " zł";
}

function removeItem(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();

    updateCart();
}

// =========================
// SLIDER
// =========================

let slides = [
    "images/MainPage_1.jpg",
    "images/MainPage_2.jpg"
];

let currentSlide = 0;

function slider(){

    let img = document.getElementById("slider");

    if(!img) return;

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        img.src = slides[currentSlide];

    }, 4000);
}

// =========================
// ALKOMAT
// =========================

function calculateAlcohol(){

    let weight =
        parseFloat(document.getElementById("weight").value);

    let drinks =
        parseFloat(document.getElementById("drinks").value);

    let hours =
        parseFloat(document.getElementById("hours").value);

    if(!weight || !drinks){

        alert("Wpisz dane!");

        return;
    }

    let promile =
        ((drinks * 10) / weight) - (hours * 0.15);

    if(promile < 0){
        promile = 0;
    }

    document.getElementById("result").innerText =
        "Szacowany poziom alkoholu: "
        + promile.toFixed(2)
        + "‰";
}

// =========================

updateCart();
slider();
