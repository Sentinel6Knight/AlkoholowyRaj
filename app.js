let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart(){
    let el = document.getElementById("cartCount");
    if(el) el.innerText = cart.length;
}

function loadCart(){
    let list = document.getElementById("cartItems");
    if(!list) return;

    let total = 0;
    list.innerHTML = "";

    cart.forEach((item, i)=>{
        total += item.price;

        list.innerHTML += `
        <div>
            <p>${item.name} - ${item.price} zł</p>
            <button onclick="removeItem(${i})">Usuń</button>
        </div>
        `;
    });

    let t = document.getElementById("total");
    if(t) t.innerText = "Razem: " + total + " zł";
}

function removeItem(i){
    cart.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
    updateCart();
}

/* slider */
let slides = ["MainPage_1.jpg","MainPage_2.jpg"];
let i = 0;

function startSlider(){
    let img = document.getElementById("slider");
    if(!img) return;

    setInterval(()=>{
        i++;
        if(i >= slides.length) i = 0;
        img.src = slides[i];
    },3000);
}

/* alkomat */
function calc(){
    let w = document.getElementById("w").value;
    let d = document.getElementById("d").value;
    let h = document.getElementById("h").value;

    let res = ((d*10)/w) - (h*0.15);

    if(res < 0) res = 0;

    document.getElementById("r").innerText = res.toFixed(2) + "‰";
}

updateCart();
startSlider();
