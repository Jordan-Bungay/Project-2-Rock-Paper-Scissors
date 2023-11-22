// Variables for game
let player = null;
let computer = null;
let win = 0;
let lose = 0;
let draw = 0;
let computerChoosing = false;

// Variables for instructions
let instructions = document.getElementById("how-to-play");
let instructionsButton = document.getElementById("instructions-button");
let closeButton = document.getElementById("close-button");

// Instructions section
instructionsButton.onclick = function() {
    instructions.style.display = "block"
}

closeButton.onclick = function () {
    instructions.style.display = "none";
}

// Event listener to choose your option
document.getElementById('rock').addEventListener('click', () => makePlayer('rock'));
document.getElementById('paper').addEventListener('click', () => makePlayer('paper'));
document.getElementById('scissors').addEventListener('click', () => makePlayer('scissors'));

// Display the player and computer choices
function displayOptions(player, computer) {
    let message = `${player} ${computer}`;
    document.getElementById('options').textContent = message;
}

// Playng out the game
function gameStart() {
    computerChoosing = true;
    setTimeout(() => {
        computer = generateComputer();
        displayOptions(`Player chose ${player}!`, ` vs. Computer chose ${computer}!`);
        let result = decideWinner(player, computer);
        displayMessage(result);
        computerChoosing = false;
    }, 1000);
}

// Function to choose your option
function makePlayer(option) {
    if (!computerChoosing) {
        player = option;
        displayOptions(`Fighter ${option} your up!`, "");
        displayMessage("");
        gameStart();
    }
}

// Function for computer option
function generateComputer() {
    if (player) { 
        let options = ['rock', 'paper', 'scissors'];
        let randomOption = Math.floor(Math.random() * options.length);
        return options[randomOption]
    }
}

// Deciding a winner
function decideWinner(player, computer) {
    let result = '';
    if (player === computer) {
        result = 'Draw!';
    } else {
        switch (player) {
            case 'rock':
                result = computer === 'scissors' ? 'You Win!' : 'You Lose...';
                break;
            case 'paper':
                result = computer === 'rock' ? 'You Win!' : 'You Lose...';
                break;
            case 'scissors':
                result = computer === 'paper' ? 'You Win!' : 'You Lose...';
                break;
        }
        if (result === 'You Win!') {
            win++;
            updateWin();
        } else if (result === 'You Lose...') {
            lose++
            updateLose();
        } else if (result === 'Draw!') {
            draw++;
            updateDraw();
        }
    }
    return result;
}

// Score tally Win, Lose, Draw
function updateWin() {
    document.getElementById('win').textContent = win;
}

function updateLose() {
    document.getElementById('lose').textContent = lose;
}

function updateDraw() {
    document.getElementById('draw').textContent = draw;
}

// Display a message
function displayMessage(message) {
    document.getElementById('result').textContent = message;
}
