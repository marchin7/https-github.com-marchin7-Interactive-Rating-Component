
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const rateElement = document.getElementById('rate');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {btn.addEventListener('click', rate)

function rate() {
   rateElement.innerText = btn.value;
}
})

function submit() {
    
    if (rateElement.innerText === '') {
        card2.style.display = 'none'
        card1.style.display = 'flex'
        alert('Please select a number')
    }

    else {
        card1.style.display = 'none'
        card2.style.display = 'flex'
    }
}

