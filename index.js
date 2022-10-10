const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const rateElement = document.getElementById('rate');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {btn.addEventListener('click', rate)

function rate() {
   rateElement.innerText = btn.value
}
})

function submit() {
    card1.style.display = 'none'
    card2.style.display = 'flex'
}