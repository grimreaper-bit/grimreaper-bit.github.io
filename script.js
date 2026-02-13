function goToLovePage() {
    window.location.href = "love.html";
}

const btn = document.getElementById("surpriseBtn");
const cinema = document.getElementById("cinema");
const lines = document.querySelectorAll(".line");
btn.addEventListener("click", () => {
    cinema.classList.add("active");

    lines.forEach((line, index) => {
        line.style.animationDelay = `${index * 1.2}s`;
    });
});
 function startSurprise() {
    const music = document.getElementById("bgMusic");
    const messageSection = document.getElementById("finalMessage");
    const textElement = document.getElementById("cinematicText");

    // 🎵 Start music from 0:13
    music.volume = 0.6;
    music.currentTime = 13;  // 13 seconds
    music.play();

    // Show message section
    messageSection.classList.remove("hidden");
    messageSection.classList.add("show");

    // Cinematic message
    const message = "In every lifetime... I would still find you. ❤️";

    typeWriter(textElement, message, 70);
}

function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}
function startCinema() {
    const music = document.getElementById("bgMusic");
    const textElement = document.getElementById("cinemaText");

    // 🎵 Start music from 0:13
    music.volume = 0.6;
    music.currentTime = 13;
    music.play();

    const lines = [
        "I don’t know when it happened...",
        "But somewhere between the small moments...",
        "You became my favorite part of the day.",
        "And if love is in the air...",
        "Then I hope you feel it too. ❤️",
        "Now the last thing i wanna ask..",
        "Will you be my valentine for life?"
    ];

    let index = 0;

    function showLine() {
        textElement.style.opacity = 0;

        setTimeout(() => {
            textElement.innerHTML = lines[index];
            textElement.style.opacity = 1;
            index++;

            if (index < lines.length) {
                setTimeout(showLine, 4000);
            }
        }, 1500);
    }

    showLine();
}
