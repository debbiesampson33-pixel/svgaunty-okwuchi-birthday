// ================================
// OPEN SURPRISE
// ================================

function openSurprise() {
    const surprise = document.getElementById("surprise");
    if (!surprise) return;

    surprise.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    const content = surprise.querySelector(".container");
    if (!content) return;

    setTimeout(() => {
        content.classList.remove("birthday-surprise");
        void content.offsetWidth;
        content.classList.add("birthday-surprise");
    }, 700);
}

  


// ================================
// ONE MORE SURPRISE
// ================================

function showVideoMessage() {
    const message = document.getElementById("surpriseVideo");

    if (!message) return;

    // Make it visible
    message.style.display = "block";
    message.classList.add("show-video");

    // Move to it
    setTimeout(() => {
        message.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 50);
}


// ================================
// BIRTHDAY COUNTDOWN
// ================================

const birthday = new Date("September 23, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = birthday - now;

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (difference <= 0) {
        const countdownBox = document.querySelector(".countdown");

        if (countdownBox) {
            countdownBox.innerHTML =
                "<h3>🎉 Happy Birthday, Aunty Okwuchi! ❤️</h3>";
        }

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    if (daysElement) daysElement.textContent = days;
    if (hoursElement) hoursElement.textContent = hours;
    if (minutesElement) minutesElement.textContent = minutes;
    if (secondsElement) secondsElement.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ================================
// FLOATING HEARTS
// ================================

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =
        15 + Math.random() * 25 + "px";
    heart.style.animationDuration =
        4 + Math.random() * 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 1200);


// ================================
// SCROLL ANIMATIONS
// ================================

const sections = document.querySelectorAll(
    ".birthday, .appreciation, .memories, .final, .birthday-video-section"
);

function revealSections() {
    sections.forEach(section => {
        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

sections.forEach(section => {
    section.classList.add("reveal");
});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

revealSections();

function playMusic() {
    const music = new Audio("./happybirdayauntyokwuchi.mp3");
    music.loop = true;
    music.play();
}
