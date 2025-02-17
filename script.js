
document.getElementById("yt-btn").addEventListener("click", function () {
    let canciones = [
        "https://www.youtube.com/watch?v=PiSfroMnqWA",
        "https://www.youtube.com/watch?v=Cb72z1ZKc70",
        "https://www.youtube.com/watch?v=ekr2nIex040",
        "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
        "https://www.youtube.com/watch?v=AjGkbFqi67c",
        "https://www.youtube.com/watch?v=NwFVSclD_uc"
    ];

    let randomIndex = Math.floor(Math.random() * canciones.length);
    window.open(canciones[randomIndex], "_blank");
});


document.addEventListener("DOMContentLoaded", function () {
    setInterval(createHeart, 1000);

    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗 💙";
        document.body.appendChild(heart);

        let size = Math.random() * 20 + 10; 
        heart.style.fontSize = size + "px";
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.position = "fixed";
        heart.style.bottom = "0";
        heart.style.opacity = "0.8";
        heart.style.animation = "floatUp 5s linear infinite";

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".imgslide"); // Obtiene todas las imágenes
    let index = 0;

    function changeSlide() {
        slides[index].classList.remove("act"); // Oculta la imagen actual
        index = (index + 1) % slides.length; // Pasa a la siguiente imagen (circular)
        slides[index].classList.add("act"); // Muestra la nueva imagen
    }

    setInterval(changeSlide, 3000); // Cambia cada 3 segundos
});

let contador = 0;
document.getElementById("teamo-btn").addEventListener("click", function () {
    contador++;
    document.getElementById("contador").textContent = contador;
});

const musica = document.getElementById("musica");
const boton = document.getElementById("musica-btn");

boton.addEventListener("click", function () {
    if (musica.paused) {
        musica.play();
        boton.textContent = "⏸ Pausar Música";
    } else {
        musica.pause();
        boton.textContent = "🎵 Reproducir Música";
    }
});
