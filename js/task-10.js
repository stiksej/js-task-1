function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', function() {
    createBoxes(Number(input.value));
});

destroyButton.addEventListener('click', function() {
    destroyBoxes();
});

function createBoxes(amount) {
    destroyBoxes(); 
    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.marginBottom = '10px';
        boxesContainer.appendChild(box);
        boxSize += 10;
    }
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}