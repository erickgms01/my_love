document.addEventListener('DOMContentLoaded', () => {
    // Easter Egg da Aliança + Animação de Corações
    const ringBtn = document.getElementById('ringBtn');
    const secretMessage = document.getElementById('secretMessage');
    const heartsContainer = document.getElementById('heartsContainer');

    ringBtn.addEventListener('click', () => {
        secretMessage.classList.toggle('visible');
        
        // Se abriu a mensagem, solta corações carinhosos na tela
        if (secretMessage.classList.contains('visible')) {
            createHearts();
        }
    });

    function createHearts() {
        const hearts = ['❤️', '💖', '✨', '💍', '🌿'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart-particle');
                heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
                heart.style.fontSize = (Math.random() * 1 + 1.2) + 'rem';
                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 120);
        }
    }

    // Lógica do Carrossel de Fotos
    const track = document.getElementById('carouselTrack');
    const slides = Array.from(track.children);
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    let currentIndex = 0;

    const updateSlidePosition = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    });
});