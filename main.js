// função para carousel: 
// Obtém os elementos da galeria
var carousel = document.querySelector('.carousel');
var slides = carousel.querySelectorAll('.slide');

// Configura variáveis de controle
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000); // Altera os slides a cada 2 segundos

// Função para avançar para o próximo slide
function nextSlide() {
  // Oculta o slide atual
  slides[currentSlide].style.display = 'none';
  
  // Incrementa o índice do slide atual
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Exibe o próximo slide
  slides[currentSlide].style.display = 'block';
}

//função para botão dropdown: 
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }