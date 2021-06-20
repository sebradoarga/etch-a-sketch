const boardArea = document.querySelector("#board-area");
const restartButton = document.querySelector("button");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Etch-a-Sketch";
pageTitle.setAttribute("id", "pageTitle");
boardArea.appendChild(pageTitle);

let board;

const getOccurrenceIndex = (str, substr, occurrence) => {
    return str.split(substr, occurrence).join(substr).length;
}

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
        let redValue;
        let greenValue;
        let blueValue;
        if(square.id == "touched" && blueValue != 0) {
            console.log(square.style.backgroundColor);
            redValue = square.style.backgroundColor.slice(square.style.backgroundColor.indexOf("(") + 1, square.style.backgroundColor.indexOf(","));
            console.log(redValue);
            redValue -= 26;
            greenValue = square.style.backgroundColor.slice(square.style.backgroundColor.indexOf(",") + 2, getOccurrenceIndex(square.style.backgroundColor, ",", 2));
            console.log(greenValue);
            greenValue -= 26;
            blueValue = square.style.backgroundColor.slice(getOccurrenceIndex(square.style.backgroundColor, ",", 2) + 2, square.style.backgroundColor.indexOf(")"));
            console.log(blueValue);
            blueValue -= 26;
            square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        } else {
            redValue = Math.floor(Math.random()*256);
            greenValue = Math.floor(Math.random()*256);
            blueValue = Math.floor(Math.random()*256);
            square.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
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