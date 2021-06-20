const board = document.querySelector("#board");

const makeBoard = () => {
    for(let i = 0; i < 16; i++) {
        let boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");
        board.appendChild(boardRow);
        for(let j = 0; j < 16; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            boardRow.appendChild(square);    
        }
    }
}

makeBoard();