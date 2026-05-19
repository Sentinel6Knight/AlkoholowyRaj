let slides = ["MainPage_1.jpg", "MainPage_2.jpg"];
let i = 0;

function startSlider() {
  const img = document.getElementById("slider");
  if (!img) return;

  setInterval(() => {
    i = (i + 1) % slides.length;
    img.src = slides[i];
  }, 3500);
}

startSlider();
