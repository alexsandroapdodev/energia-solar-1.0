const slides = [
  {
    image: "img/painel-solar.jpg",
    title: "Instaladores de painéis solares",
    description:
      "A energia solar é uma forma de energia renovável que utiliza a luz do sol para gerar eletricidade<br />ou calor.",
  },
  {
    image: "img/solar2.jpg",
    title: "Reduza sua conta de energia",
    description:
      "Com nossos painéis solares, você pode economizar até 95% na conta de luz e ainda ajudar o meio ambiente.",
  },
  {
    image: "img/solar3.jpg",
    title: "Soluções completas para sua casa",
    description:
      "Oferecemos consultoria, instalação e manutenção para projetos residenciais e comerciais de energia solar.",
  },
  {
    image: "img/solar4.jpg",
    title: "Energia limpa e sustentável",
    description:
      "Contribua para um futuro mais verde com o uso da energia solar em sua residência ou empresa.",
  },
];

let current = 0;
const main = document.querySelector("main");
const numero = document.getElementById("current-slide");
const barraPreenchida = document.getElementById("barra-preenchida");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");

// Atualiza slide
function updateSlide() {
  const slide = slides[current];

  // Atualiza imagem de fundo
  main.style.backgroundImage = `url('${slide.image}')`;

  // Atualiza textos
  title.innerHTML = slide.title;
  description.innerHTML = slide.description;

  // Atualiza número e progresso
  numero.textContent = String(current + 1).padStart(2, "0");
  const progress = ((current + 1) / slides.length) * 100;
  barraPreenchida.style.width = `${progress}%`;
}

// Botões
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

// Slide automático
let autoSlide = setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlide();
}, 5000); // Troca a cada 5 segundos

// Reinicia o tempo quando clica nos botões
function restartAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlide();
  }, 5000);
}

// Inicializa
updateSlide();
