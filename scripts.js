const slides = [
  {
    image: "img/solar1.jpg",
    title: "Instaladores de painéis solares",
    description:
      "A energia solar é uma forma de energia renovável que utiliza a luz do sol para gerar eletricidade<br />ou calor.",
  },
  {
    image: "img/solar2.jpg",
    title: "Reduza sua conta de energia e pague menos",
    description:
      "Com nossos painéis solares, você pode economizar até 95% na conta de luz e ainda ajudar o <br />meio ambiente.",
  },
  {
    image: "img/solar3.jpg",
    title: "Soluções completas para sua casa",
    description:
      "Oferecemos consultoria, instalação e manutenção para projetos residenciais e comerciais de <br />energia solar.",
  },
  {
    image: "img/solar4.jpg",
    title: "Energia limpa e sustentável para seu negócio",
    description:
      "Contribua para um futuro mais verde com o uso da energia solar em sua residência ou<br/> empresa.",
  },
];

let current = 0;
const main = document.querySelector("main");
const numero = document.getElementById("current-slide");
const barraPreenchida = document.getElementById("barra-preenchida");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");

function updateSlide() {
  const slide = slides[current];

  main.style.backgroundImage = `url('${slide.image}')`;

  title.innerHTML = slide.title;
  description.innerHTML = slide.description;

  numero.textContent = String(current + 1).padStart(2, "0");
  const progress = ((current + 1) / slides.length) * 100;
  barraPreenchida.style.width = `${progress}%`;
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  updateSlide();
  restartAutoSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide();
  restartAutoSlide();
});

let autoSlide = setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlide();
}, 10000);

function restartAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlide();
  }, 10000);
}

updateSlide();
