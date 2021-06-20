const boardArea = document.querySelector("#board-area");
const restartButton = document.querySelector("button");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Etch-a-Sketch";
pageTitle.setAttribute("id", "pageTitle");
boardArea.appendChild(pageTitle);

let board;

let squareNumber = 16;
const makeBoard = () => {
    board = document.createElement("div");
    board.setAttribute("id", "board");
    boardArea.appendChild(board);
    for(let i = 0; i < squareNumber; i++) {
        let boardRow = document.createElement("div");
        boardRow.classList.add("boardRow");
        board.appendChild(boardRow);
        for(let j = 0; j < squareNumber; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            boardRow.appendChild(square);
        }
    }
    let squares = board.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
        if(square.id != "touched") {
            square.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            square.setAttribute("id", "touched");
        }
    })
})
}

makeBoard();

restartButton.addEventListener("click", (e) => {
    squareNumber = parseInt(prompt("How many squares should the next board have on each side? (100 max)"));
    if(squareNumber > 100) {
        squareNumber = 100;
        boardArea.removeChild(board);
        makeBoard();
    } else if(squareNumber > 0 && squareNumber <= 100) {
        boardArea.removeChild(board);
        makeBoard();
    }
})