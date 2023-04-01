const form = document.querySelector(".form-control");
const card = document.querySelector(".card");
const cardThankYou = document.querySelector(".card-thank-you");
const submitBtn = document.querySelector(".submit-btn");
const ratingEl = document.querySelector(".rating-span");
const radioBtns = document.querySelectorAll(".radio-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
});

radioBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        radioBtns.forEach((item) => {
            if (item != btn) {
                item.parentElement.classList.remove("active");
            } else {
                item.parentElement.classList.add("active");
                ratingEl.innerText = item.parentElement.innerText;
                submitBtn.removeAttribute("disabled");
            }
        });
    });
});

function submitForm() {
    card.classList.add("hidden");
    cardThankYou.classList.add("visible");
}
