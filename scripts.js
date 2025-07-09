const images = [
  "img/painel-solar.jpg",
  "img/solar2.jpg",
  "img/solar3.jpg",
  "img/solar4.jpg",
];

let current = 0;
const main = document.querySelector("main");
const numero = document.getElementById("current-slide");
const barraPreenchida = document.getElementById("barra-preenchida");

function updateSlide() {
  main.style.backgroundImage = `url('${images[current]}')`;

  numero.textContent = String(current + 1).padStart(2, "0");

  const total = images.length;
  const progress = ((current + 1) / total) * 100;

  barraPreenchida.style.width = `${progress}%`;
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateSlide();
});

updateSlide();
