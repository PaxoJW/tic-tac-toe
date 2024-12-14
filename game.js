const btn = document.querySelector('button');

btn.addEventListener("click", getComputerChoice() {
    let choice = Math.random()*2;
    console.log(choice);
    if (choice === 0) {
        return 'ROCK';
    } else if (choice === 1) {
        return 'PAPER';
    } else {
        return 'SCISSOR';
    }

    const div = document.querySelector('div');
    const span = document.createElement('span');
    span.textContent = getComputerChoice;
    div.append(span);
    console.log(span);
});


function getComputerChoice () {
    let choice = Math.random()*2;
    console.log(choice);
    if (choice === 0) {
        return 'ROCK';
    } else if (choice === 1) {
        return 'PAPER';
    } else {
        return 'SCISSOR';
    }

    const div = document.querySelector('div');
    const span = document.createElement('span');
    span.textContent = getComputerChoice;
    div.append(span);
    console.log(span);
};

