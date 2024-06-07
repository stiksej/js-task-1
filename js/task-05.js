const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameOutput.textContent = "Anonymous";

nameInput.addEventListener('input', function() {
    const name = nameInput.value.trim();
    nameOutput.textContent = name === "" ? "Anonymous" : name;
});