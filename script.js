// Boton musica aleatoria. 
let canciones = [
    "https://www.youtube.com/watch?v=PiSfroMnqWA",
    "https://www.youtube.com/watch?v=Cb72z1ZKc70",
    "https://www.youtube.com/watch?v=ekr2nIex040",
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    "https://www.youtube.com/watch?v=T_FkEw27XJ0",
    "https://www.youtube.com/watch?v=ilUCwLLdltQ",
    "https://www.youtube.com/watch?v=NwFVSclD_uc",
    "https://www.youtube.com/watch?v=aZLI14nFC4E",
    "https://www.youtube.com/watch?v=78DVtcsT26k",
    "https://www.youtube.com/watch?v=nyuo9-OjNNg",
    "https://www.youtube.com/watch?v=h0p8yTqj8i4",
    "https://www.youtube.com/watch?v=4OvhrzXu4Yo",
    "https://www.youtube.com/watch?v=qU9mHegkTc4"
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

//Slider imagenes normales
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".imgslide"); 
    let index = 0;

    function changeSlide() {
        slides[index].classList.remove("act"); 
        index = (index + 1) % slides.length; 
        slides[index].classList.add("act"); 
    }

    setInterval(changeSlide, 3000); 
});

//slider imagenes anchas
document.addEventListener("DOMContentLoaded", function () {
    let wideIndex = 0;
    const wideSlides = document.querySelectorAll(".imgancho"); // Seleccionar correctamente las imágenes

    function showWideSlides() {
        wideSlides.forEach(slide => slide.classList.remove("act2"));
        wideSlides[wideIndex].classList.add("act2");

        wideIndex++;
        if (wideIndex >= wideSlides.length) {
            wideIndex = 0;
        }
    }

    setInterval(showWideSlides, 3000);
});



// Código del clicker con guardado
// Obtener el contador desde LocalStorage (si existe)
let contador = localStorage.getItem("contadorTeAmo") ? parseInt(localStorage.getItem("contadorTeAmo")) : 0;


document.getElementById("contador").textContent = contador;


document.getElementById("teamo-btn").addEventListener("click", function() {
    if (contador < 100000) { 
        contador++;
        document.getElementById("contador").textContent = contador;

        
        localStorage.setItem("contadorTeAmo", contador);
    }

    
    if (contador  %  1000 === 0) {
        explosionDeCorazones();
    }
});

// Función para la explosión de corazones
function explosionDeCorazones() {
    let sonidoExplosion = new Audio("audio/xd.mp3"); 
    sonidoExplosion.play();  
    
    for (let i = 0; i < 30; i++) {  
        let corazon = document.createElement("div");
        corazon.classList.add("corazon");
        document.body.appendChild(corazon);

       
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.top = Math.random() * window.innerHeight + "px";

        
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
