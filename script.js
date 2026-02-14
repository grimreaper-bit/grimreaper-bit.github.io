function goToLovePage() {
    window.location.href = "love.html";
}


function startCinema() {
    const music = document.getElementById("bgMusic");
    const textElement = document.getElementById("cinemaText");
    const finalButtons = document.getElementById("finalButtons");

    // 🎵 Start music from 0:13
    music.volume = 0.6;
    music.currentTime = 13;
    music.play();

    const lines = [
        "I don’t know when it happened...",
        "But somewhere between the small moments...",
        "You became my favorite part of my world.",
        "Every laugh, every glance...",
        "Somehow meant more than I expected.",
        "And if there is one thing I wanna ask you...",
        "Will you be my Valentine for life? ❤️"
    ];

    let index = 0;

    function showLine() {
        // Fade out current text
        textElement.style.opacity = 0;

        setTimeout(() => {
            // Update text
            textElement.textContent = lines[index];

            // Fade in
            textElement.style.opacity = 1;

            index++;

            // If not last line → continue
            if (index < lines.length) {
                setTimeout(showLine, 4500);
            } 
            // If last line → hold longer, then show buttons
            else {
                setTimeout(() => {
                    finalButtons.classList.add("show-question");
                }, 5000);
            }

        }, 1500); // fade duration
    }

    showLine();
}
document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    // ❤️ YES BUTTON — Cinematic moment
    if (yesBtn) {
        yesBtn.addEventListener("click", function () {

            // Soft glow effect
            yesBtn.style.transform = "scale(1.2)";
            yesBtn.style.boxShadow = "0 0 40px rgba(255, 100, 140, 0.8)";

            // Fade background slightly warmer
            document.body.style.transition = "background 2s ease";
            document.body.style.background = "linear-gradient(180deg, #ffe4ec, #ffd1dc)";

            // Change text to final line
            const textElement = document.getElementById("cinemaText");
            textElement.style.opacity = 0;

            setTimeout(() => {
                textElement.textContent = "Promise I will keep you happy for life. ❤️";
                textElement.style.opacity = 1;
                textElement.style.fontSize = "3rem";
            }, 1000);

        });
    }

    // 😏 NO BUTTON — Runs away
    if (noBtn) {
        noBtn.addEventListener("mouseover", function () {

            const randomX = Math.random() * 400 - 200;
            const randomY = Math.random() * 300 - 150;

            noBtn.style.position = "relative";
            noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }

});
document.addEventListener("DOMContentLoaded", function () {

    if (document.body.classList.contains("cinema-body")) {
        startCinema();
    }

});


