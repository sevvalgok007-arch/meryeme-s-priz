
console.log("Meryem için özel bir sürpriz hazırlanıyor! ♡");

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const closeLetter = document.getElementById("closeLetter");

if (envelope && letter && closeLetter) {

    envelope.addEventListener("click", function () {
        envelope.classList.add("opened");
        letter.classList.add("show");
        envelope.querySelector(".envelope-hint").style.display = "none";
    });

    closeLetter.addEventListener("click", function () {
        letter.classList.remove("show");
        envelope.classList.remove("opened");
        envelope.querySelector(".envelope-hint").style.display = "block";
    });

}
