// Variables
let player = null;
let computer = null;
let win = 0;
let lose = 0;
let draw = 0;

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
