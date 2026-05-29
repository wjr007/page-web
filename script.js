// Seleciona todos os cards
const cards = document.querySelectorAll(".card, .img-card");

// Efeito de clique nos cards
cards.forEach(card => {
  card.addEventListener("click", () => {
    console.log("Card acessado!");
    // Você pode substituir o alert por um link real no futuro
  });
});

// Revelar elementos ao rolar a página
const revealOnScroll = () => {
  cards.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50;

    if (isVisible) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

// Configuração inicial para a animação de scroll
cards.forEach(c => {
  c.style.opacity = "0";
  c.style.transform = "translateY(30px)";
  c.style.transition = "all 0.6s ease-out";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;

    // Fecha outros itens se quiser que apenas um fique aberto por vez
    /*
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem) item.classList.remove('active');
    });
    */

    accordionItem.classList.toggle('active');
  });
});