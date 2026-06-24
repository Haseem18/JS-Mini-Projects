const board = document.querySelector(".board");
const resultElm = document.querySelector(".result")
const turnElm = document.querySelector(".turn")
const resetBtn = document.querySelector(".reset-btn");

let turn = "X";
let totalInsert = 0;
let winnerDecided = false;

const gridBox = ["", "", "", "", "", "", "", "", ""];

const checkWinner = (turn) => {
    if (gridBox[0] === turn && gridBox[1] === turn && gridBox[2] === turn) {
        return true;
    } else if (gridBox[3] === turn && gridBox[4] === turn && gridBox[5] === turn) {
        return true;
    } else if (gridBox[6] === turn && gridBox[7] === turn && gridBox[8] === turn) {
        return true;
    } else if (gridBox[0] === turn && gridBox[3] === turn && gridBox[6] === turn) {
        return true;
    } else if (gridBox[1] === turn && gridBox[4] === turn && gridBox[7] === turn) {
        return true;
    } else if (gridBox[2] === turn && gridBox[5] === turn && gridBox[8] === turn) {
        return true;
    } else if (gridBox[0] === turn && gridBox[4] === turn && gridBox[8] === turn) {
        return true;
    } else if (gridBox[2] === turn && gridBox[4] === turn && gridBox[6] === turn) {
        return true;
    }
}

board.addEventListener("click", (event) => {
    const element = event.target;

    if (element.tagName === "BUTTON") {

        if (winnerDecided || totalInsert === 9 || gridBox[element.id] !== "") {
            return;
        }


        element.textContent = turn;
        gridBox[element.id] = turn;

        totalInsert++;

        if (checkWinner(turn)) {
            resultElm.textContent = `Player ${turn} is Wnner!`;
            winnerDecided = true;
            return;
        }

        if (totalInsert === 9) {
            resultElm.textContent = "Game is Draw";
            return;
        }          

        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }

        turnElm.innerHTML = `Current Turn: <span>${turn}</span>`;
        resultElm.textContent = "Game is Started."           
    }
})

resetBtn.addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).textContent = "";
        gridBox[i] = "";
    }

    turnElm.innerHTML = `Current Turn: <span>X</span>`;
    resultElm.textContent = "Game is Started."; 
      
    totalInsert = 0;     
    winnerDecided = false; 
    turn = "X";
})  

