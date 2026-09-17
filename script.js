function openSurprise() {
    const surprise = document.getElementById("surprise");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(function () {
        surprise.classList.add("birthday-surprise");

        setTimeout(function () {
            surprise.classList.remove("birthday-surprise");
        }, 1200);

    }, 700);
}

function showVideoMessage() {
    const video = document.getElementById("birthdayVideo");

    video.classList.add("show-video");

    video.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// BIRTHDAY COUNTDOWN

const birthday = new Date("September 23, 2026 00:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const difference = birthday - now;

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
        (difference % (1000 * 60)) / 1000
    );


    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;


    if (difference < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown").innerHTML =
            "<h3>🎉 Happy Birthday, Aunty Okwuchi! ❤️</h3>";

    }

}, 1000);

// FLOATING HEARTS

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 1200);

// SCROLL ANIMATIONS

const sections = document.querySelectorAll(
    ".birthday, .appreciation, .memories, .final"
);

sections.forEach(function (section) {
    section.classList.add("reveal");
});

function revealSections() {
    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();