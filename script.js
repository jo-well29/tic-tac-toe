const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let currentPlayer = 'X';
let gameIsOver = false;

const checkWinner = () => {
    // Check rows, columns, and diagonals for a winner
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] === currentPlayer &&
            board[i][1] === currentPlayer &&
            board[i][2] === currentPlayer
        ) {
            return true;
        }
        if (
            board[0][i] === currentPlayer &&
            board[1][i] === currentPlayer &&
            board[2][i] === currentPlayer
        ) {
            return true;
        }
    }

    if (
        board[0][0] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][2] === currentPlayer
    ) {
        return true;
    }

    if (
        board[0][2] === currentPlayer &&
        board[1][1] === currentPlayer &&
        board[2][0] === currentPlayer
    ) {
        return true;
    }

    return false;
}

const checkDraw = () => {
    // Check if the board is full
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

const makeMove = (row, col) => {
    if (gameIsOver || board[row][col] !== '') {
        return;
    }

    board[row][col] = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;

    if (checkWinner()) {
        document.getElementById('result').innerText = `${currentPlayer} wins!`;
        gameIsOver = true;
    } else if (checkDraw()) {
        document.getElementById('result').innerText = "It's a draw!";
        gameIsOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}
