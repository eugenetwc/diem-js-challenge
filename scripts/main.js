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

// Theme
let lightInput = document.getElementById('light');
let darkInput = document.getElementById('dark');
let bgDiv = document.getElementsByClassName("panel bg-dark text-white")[0];
let themeOutput = document.getElementById('themeOutput');

lightInput.oninput = function() {
    bgDiv.classList.remove('bg-dark', 'text-white');
    bgDiv.classList.add('bg-light', 'text-black');

    themeOutput.textContent = 'You chose Dark Mode!';
}

darkInput.oninput = function() {
    bgDiv.classList.remove('bg-light', 'text-black');
    bgDiv.classList.add('bg-dark', 'text-white');

    themeOutput.textContent = 'You chose Light Mode!';
}