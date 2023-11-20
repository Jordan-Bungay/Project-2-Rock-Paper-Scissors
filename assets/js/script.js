// Variables
let player = null;
let computer = null;
let win = 0;
let lose = 0;
let draw = 0;
let computerChoosing = false;

// Event listener to choose your option
document.getElementById('rock').addEventListener('click', () => makePlayer('rock'));
document.getElementById('paper').addEventListener('click', () => makePlayer('paper'));
document.getElementById('scissors').addEventListener('click', () => makePlayer('scissors'));

// Function to choose your option
function makePlayer(option) {
    if (!)
}

// Deciding a winner
function setWinner(player, computer) {
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
