const form = document.getElementById('form');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const rateElement = document.getElementById('rate');
const buttons = document.querySelectorAll('.btn');
const submitBtn = document.getElementById('submit-btn');
const alertMsg = 'Please select a rating';

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});

buttons.forEach(item=>{item.addEventListener('click', ()=>{
    buttons.forEach(btn=>{
        if(item !== btn) {
            btn.classList.remove('active')
        }
        else {btn.classList.add('active')}
    })
    rateElement.innerText = item.innerText;
})});

submitBtn.addEventListener('click', ()=>{
    if (rateElement.innerText === '') {
        card2.style.display = 'none';
        card1.style.display = 'flex';
        alert(alertMsg);
    }
    else {
        card1.style.display = 'none';
        card2.style.display = 'flex';
    }
});





