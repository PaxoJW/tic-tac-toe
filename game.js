const div = document.querySelector("div");

function getHumanChoice (e) {
    btnText = e.target.innerText.toLowerCase();
    return btnText;
};

function getComputerChoice () {
    let num = Math.floor(Math.random()*3);
    let choice = '';
    if (num === 0) {
        choice = 'rock';
    } else if (choice === 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    };
    console.log(num);
    return choice;
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let roundWinner = '';
    if (humanChoice === computerChoice) {
        roundWinner = 'tie';
    } else if ((humanChoice === 'scissors') && (computerChoice === 'paper')) {
        roundWinner = 'human';
        humanScore += 1;
    } else if ((humanChoice == 'rock') && (computerChoice === 'scissors')) {
        roundWinner = 'human';
        humanScore += 1;
    } else if ((humanChoice === 'paper') && (computerChoice === 'rock')) {
        roundWinner = 'human';
        humanScore += 1;
    } else {
        roundWinner = 'computer';
        computerScore += 1;
    }
    console.log(humanChoice, computerChoice, roundWinner, humanScore, computerScore);
    spn.innerText = `${roundWinner}, ${humanScore}, ${computerScore}`;
    div.append(spn);
};

document.querySelectorAll("button").forEach( btn => {
    btn.addEventListener("click", event => {
        humanSelection = getHumanChoice(event);
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    });
});

const spn = document.createElement("span");


// playRound(humanSelection, computerSelection);

// function playGame () {           
//     let i = 0;
//     while (i < 5) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();             
//         playRound(humanSelection, computerSelection);
//         i++;
//         if (humanScore === 3) {
//             break;
//         } else if (computerScore === 3) {
//             break;
//         }
//     };
//     if (humanScore > computerScore) {
//         console.log("You won!");
//     } else if (humanScore < computerScore) {
//         console.log("The computer beat you!");
//     } else {
//         console.log("It's a tie");
//     }
// };

// // playGame();

