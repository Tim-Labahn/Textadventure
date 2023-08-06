let board = Array(9).fill('');
let currentPlayer = 'X';

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function makeMove(position) {
    if (board[position] === '' && !checkWinner()) {
        board[position] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function printBoard() {
    console.log(board.join(' | '));
}

function initGame() {
    printBoard();
    console.log("Let's play Tic-Tac-Toe! Player X goes first.");
}

function playGame() {
    initGame();
    while (!checkWinner() && board.includes('')) {
        const position = Int(prompt(`Player ${currentPlayer}, enter your position (0-8):`));
        makeMove(position);
        printBoard();
    }

    if (checkWinner()) {
        console.log(`Congratulations! Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
    } else {
        console.log("It's a draw!");
    }
}

playGame();
