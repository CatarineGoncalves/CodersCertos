// Seleciona todas as fases
const phases = document.querySelectorAll('.phase');

// Inicializa o índice do slide atual
let currentSlide = 0;

// Função para mostrar o próximo slide
function showNextSlide() {
    // Esconde o slide atual
    phases[currentSlide].style.display = 'none';

    // Atualiza o índice para o próximo slide
    currentSlide = (currentSlide + 1) % phases.length;

    // Mostra o próximo slide
    phases[currentSlide].style.display = 'block';
}

// Mostra o primeiro slide inicialmente
phases[currentSlide].style.display = 'block';

// Define um intervalo para avançar automaticamente os slides a cada 5 segundos
setInterval(showNextSlide, 1000);
