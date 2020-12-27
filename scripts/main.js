let nameInput = document.getElementById('name');
let nameOutput = document.getElementById('nameOutput')

nameInput.onfocus = function() {
    nameOutput.innerHTML = 'Hello there! What\'s your name?';
}

nameInput.onblur = function() {
    if (nameInput.value) {
        nameOutput.innerHTML = `Hi, ${nameInput.value}!`;
    } 
}
