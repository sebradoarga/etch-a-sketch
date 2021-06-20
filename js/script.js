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
        console.log("made row");
        for(let j = 0; j < squareNumber; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            boardRow.appendChild(square);
            console.log("made squares");    
        }
    }
    let squares = board.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
        square.setAttribute("id", "touched");
    })
})
}

makeBoard();

restartButton.addEventListener("click", (e) => {
    squareNumber = parseInt(prompt("How many squares should the next board have on each side? (2 - 100)"));
    boardArea.removeChild(board);
    makeBoard();
})