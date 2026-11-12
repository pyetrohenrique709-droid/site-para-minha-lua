const openButton = document.getElementById("openButton");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

openButton.addEventListener("click", function () {
    intro.style.opacity = "0";
    intro.style.visibility = "hidden";

    setTimeout(function () {
        intro.style.display = "none";
        mainContent.classList.remove("hidden");
    }, 800);
});

const moreQualitiesButton = document.getElementById("moreQualitiesButton");
const extraQualities = document.getElementById("extraQualities");

moreQualitiesButton.addEventListener("click", function () {
    extraQualities.classList.remove("hidden");
    moreQualitiesButton.style.display = "none";
});

const yesButton = document.getElementById("yesButton");
const answer = document.getElementById("answer");

yesButton.addEventListener("click", function () {
    answer.classList.remove("hidden");
    yesButton.textContent = "Eu te amo! ❤️";
    yesButton.disabled = true;
});