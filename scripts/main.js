// Name
let nameInput = document.getElementById('name');
let nameOutput = document.getElementById('nameOutput')

nameInput.onfocus = function() {
    nameOutput.textContent = 'Hello there! What\'s your name?';
}

nameInput.onblur = function() {
    if (nameInput.value) {
        nameOutput.textContent = `Hi, ${nameInput.value}!`;
    } 
}

// Birthday
let ageInput = document.getElementById('date');
let ageOutput = document.getElementById('ageOutput');

ageInput.onfocus = function() {
    ageOutput.textContent = 'Lemme guess, your age is...';
}

ageInput.onblur = function() {
    if (ageInput.value) {
        let birthday = new Date(ageInput.value)
        let now = new Date();
        let age = now.getFullYear() - birthday.getFullYear();
        ageOutput.textContent = `Your age is ${age} years old!`;
    } else {
        ageOutput.textContent = 'Would you mind entering your birthday?';
    }
}