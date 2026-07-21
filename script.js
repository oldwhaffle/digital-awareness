const logoTrack = document.getElementById("logoTrack");

if (logoTrack) {

    logoTrack.innerHTML += logoTrack.innerHTML;

}

const heroText = document.getElementById("hero-text");

if (heroText) {

    const phrases = [
        "LIVE ANALOG VIDEO PROJECTIONS",
        "TV WALL INSTALLATIONS",
        "IMMERSIVE STAGE LIGHTING",
        "ONE-OF-A-KIND MUSIC VIDEOS"
    ];

    let current = 0;

    setInterval(() => {

        heroText.style.opacity = 0;

        setTimeout(() => {

            current = (current + 1) % phrases.length;
            heroText.textContent = phrases[current];

            heroText.style.opacity = 1;

        }, 300);

    }, 3000);

}
