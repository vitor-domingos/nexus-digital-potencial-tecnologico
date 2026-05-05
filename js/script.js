document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada e script funcionando!");

    // --- Funcionalidade: Rolagem Suave ---
    const linksInternos = document.querySelectorAll('a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerOffset = document.querySelector('.header')?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                } else {
                    console.warn(`Elemento com ID '${targetId}' não encontrado para rolagem.`);
                    if (targetId.includes('-placeholder')) {
                        alert("Funcionalidade em breve! Explore as outras seções.");
                    }
                }
            }
        });
    });

    // --- Funcionalidade: Animação ao Rolar (Opcional) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Descomente para observar apenas uma vez
            }
            // else {
            //     entry.target.classList.remove('visible'); // Descomente para re-animar ao sair da tela
            // }
        });
    }, {
        threshold: 0.1
    });

    const elementosParaAnimar = document.querySelectorAll('.beneficio-item, .depoimento');
    elementosParaAnimar.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

});