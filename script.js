// Infinite logo carousel
const logoTrack = document.getElementById("logoTrack");

if (logoTrack) {
    logoTrack.innerHTML += logoTrack.innerHTML;
}


// Rotating hero text
document.addEventListener("DOMContentLoaded", () => {

    const heroText = document.getElementById("hero-text");

    if (!heroText) return;

    const phrases = [
        "LIVE ANALOG VIDEO PROJECTIONS",
        "TV WALL INSTALLATIONS",
        "IMMERSIVE STAGE LIGHTING",
        "ONE-OF-A-KIND MUSIC VIDEOS"
    ];

    let current = 0;

    heroText.style.transition = "opacity 0.4s ease";

    setInterval(() => {

        heroText.style.opacity = "0";

        setTimeout(() => {

            current = (current + 1) % phrases.length;
            heroText.textContent = phrases[current];
            heroText.style.opacity = "1";

        }, 400);

    }, 3000);

});
