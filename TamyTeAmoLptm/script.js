document.addEventListener("DOMContentLoaded", function () {
    alert("Hola mi amor Tamy :D 💖, ¿t asuste? jsjsjs. Esta página es solo para ti!");
});


document.addEventListener("DOMContentLoaded", function () {
    setInterval(createHeart, 1000);

    function createHeart() {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💜";
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

