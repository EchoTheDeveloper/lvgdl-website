document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade in/out effect for the CTA button
    const ctaButton = document.querySelector('.cta-button');
    let fadeDirection = 'out';
    let opacity = 1;

    function fadeButton() {
        if (fadeDirection === 'out') {
            opacity -= 0.01;
            if (opacity <= 0.5) {
                fadeDirection = 'in';
            }
        } else {
            opacity += 0.01;
            if (opacity >= 1) {
                fadeDirection = 'out';
            }
        }
        ctaButton.style.opacity = opacity;
    }

    setInterval(fadeButton, 50);

    // Glitch effect for the logo
    const logo = document.getElementById('logo');
    
    function triggerGlitch() {
        logo.classList.add('glitch-active');
        setTimeout(() => {
            logo.classList.remove('glitch-active');
        }, 200);
    }

    setInterval(triggerGlitch, 5000);
});
