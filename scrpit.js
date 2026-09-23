// Animación suave de desplazamiento al hacer clic en el menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Control interactivo para asegurar que los videos se reproduzcan automáticamente
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.play().catch(error => {
            console.log("Autoplay bloqueado por el navegador:", error);
        });
    });
});
