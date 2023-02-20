let cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

let playerElement = document.querySelector('.player');
let restartBtn = document.querySelector('.restart');


for (let cell of cells) {
    cell.addEventListener('click', function() {
        if(cell.textContent == '') {
            cell.textContent = currentPlayer;

            if(chekWinner()) {
                playerElement.textContent = `Player ${currentPlayer} is winner!`
                restartBtn.style.display = 'block';
                return ;
            }

            if(chekDraw()) {
                playerElement.textContent = `Draw game! Play again ?`
                restartBtn.style.display = 'block';

                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
}

function chekWinner() {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];
    
    for (let combination of winningCombination) {
        if( cells[combination[0]].textContent === currentPlayer &&
            cells[combination[1]].textContent === currentPlayer && 
            cells[combination[2]].textContent === currentPlayer ) {
            return true;
        } 
    }
    return false;
};

function chekDraw() {
    for (let cell of cells) {
        if(cell.textContent === '') {
            return false;
        } 
    }
    return true;
}


restartBtn.addEventListener('click', (e) => {
    for (const cell of cells) {
        cell.textContent = '';
    }
    playerElement.textContent = '';
    restartBtn.style.display = 'none';
})
