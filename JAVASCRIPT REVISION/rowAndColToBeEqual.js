const isEqual= (board) => {
    
    let target = 0;

    for (let count = 0; count < board.length; count++) {
        target += board[count][count];
    }

   for (let rows = 0; rows < board.length; rows++) {
        let sumOfRow = 0;
        for (let cols = 0; cols < board.length; cols++) {
            sumOfRow += board[rows][cols];
        }
        if (sumOfRow != target) {
            return false;
        }
    }

    for (let cols = 0; cols < board.length; cols++) {
        let sumOfCol = 0;
        for (let rows = 0; rows < board.length; rows++) {
            sumOfCol += board[rows][cols];
        }
        if (sumOfCol != target) {
            return false;
        }
    }

    return true;
}


const array = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

console.log(isEqual(array))

module.exports = isEqual