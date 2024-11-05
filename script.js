document.addEventListener('DOMContentLoaded', () => {
    // Glitch effect
    const glitchElement = document.querySelector('.glitch');
    setInterval(() => {
        glitchElement.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
        setTimeout(() => {
            glitchElement.style.transform = 'translate(0, 0)';
        }, 100);
    }, 3000);

    // Button hover effect
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.opacity = '0.8';
    });
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.opacity = '1';
    });

    // Animate hacker text
    const hackerLines = document.querySelectorAll('.hacker-line');
    hackerLines.forEach((line, index) => {
        line.style.animationDelay = `${index * 0.5}s`;
    });

    // Continuously change hacker text color
    setInterval(() => {
        const hue = Math.random() * 360;
        hackerLines.forEach(line => {
            line.style.color = `hsl(${hue}, 100%, 50%)`;
        });
    }, 5000);

    // Add floating particles
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 5 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }

    // Add circuit board background
    const circuitBackground = document.createElement('div');
    circuitBackground.classList.add('circuit-background');
    document.body.insertBefore(circuitBackground, document.body.firstChild);
});
