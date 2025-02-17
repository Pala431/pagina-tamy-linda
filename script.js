// Boton musica aleatoria. 
let canciones = [
    "https://www.youtube.com/watch?v=PiSfroMnqWA",
    "https://www.youtube.com/watch?v=Cb72z1ZKc70",
    "https://www.youtube.com/watch?v=ekr2nIex040",
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    "https://www.youtube.com/watch?v=ilUCwLLdltQ",
    "https://www.youtube.com/watch?v=NwFVSclD_uc",
    "https://www.youtube.com/watch?v=aZLI14nFC4E"
];

let cancionesReproducidas = [];
let tiempoEspera = 3000; 
let cancionAnterior = null;

document.getElementById("yt-btn").addEventListener("click", function () {
    if (cancionesReproducidas.length === canciones.length) {
        // Si todas las canciones se han reproducido, reiniciamos
        cancionesReproducidas = [];
    }

    let cancionesDisponibles = canciones.filter(cancion => !cancionesReproducidas.includes(cancion));
    
    // Seleccionar una canción al azar de las disponibles
    let randomIndex = Math.floor(Math.random() * cancionesDisponibles.length);
    let cancionSeleccionada = cancionesDisponibles[randomIndex];

    cancionesReproducidas.push(cancionSeleccionada);
    window.open(cancionSeleccionada, "_blank");
    document.getElementById("yt-btn").disabled = true;

    setTimeout(() => {
        document.getElementById("yt-btn").disabled = false;
    }, tiempoEspera);
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

// Código del clicker con guardado
// Obtener el contador desde LocalStorage (si existe)
let contador = localStorage.getItem("contadorTeAmo") ? parseInt(localStorage.getItem("contadorTeAmo")) : 0;

// Mostrar el contador guardado
document.getElementById("contador").textContent = contador;

// Evento para aumentar el contador al hacer clic
document.getElementById("teamo-btn").addEventListener("click", function() {
    if (contador < 1000) { 
        contador++;
        document.getElementById("contador").textContent = contador;

        // Guardar el nuevo valor en LocalStorage
        localStorage.setItem("contadorTeAmo", contador);
    }

    // Cuando llega a 1000, mostrar la explosión de corazones
    if (contador === 1000) {
        explosionDeCorazones();
    }
});

// Función para la explosión de corazones
function explosionDeCorazones() {
    for (let i = 0; i < 30; i++) {  // Cantidad de corazones
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        document.body.appendChild(corazon);

        // Posición aleatoria
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.top = Math.random() * window.innerHeight + "px";

        // Animación
        setTimeout(() => {
            corazon.remove();
        }, 2000);
    }
}



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
