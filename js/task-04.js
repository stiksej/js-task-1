const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById('value');

let currentValue = 0;

function updateCounter() {
  counterValue.textContent = currentValue;
}

function incrementCounter() {
  currentValue++;
  updateCounter();
}

function decrementCounter() {
  currentValue--;
  updateCounter();
}

decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener('click', incrementCounter);