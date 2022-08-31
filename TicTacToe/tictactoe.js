const Player = (character) => {
    this.character = character
    const getCharacter = () => character
    return {getCharacter};
}

const gameBoard = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];

    return {
        board
    }
  })();


const displayController = (() => {
    const boardCells = document.querySelectorAll("[data-cell]")
    const boardCellContent = document.querySelectorAll(".displayCell")
    const displayMsg = document.querySelector('.displayMsg')
    const displayMsgRound = document.querySelector('.displayMsgRound')
    const resetBtn = document.querySelector('.resetBtn')
    
    boardCellContent.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            if (gameController.getIsGameOver() || e.target.textContent !== "") return;
            let parentIndex = e.target.parentElement.getAttribute('data-cell')
            gameController.playRound(parentIndex);
            updateGameboardDisplay();
        })
    })
    
    const updateGameboardDisplay = () => {
        for (let i = 0; i < boardCellContent.length; i++) {
            boardCellContent[i].innerText = gameBoard.board[i]
        }
    } 

    const updateDisplayMsg = (msg) => {
        displayMsg.innerText = msg
    }

    const updateDisplayMsgRound = (msg) => {
        displayMsgRound.innerText = msg
    }

    return {
        updateGameboardDisplay,
        updateDisplayMsg,
        updateDisplayMsgRound
    }

    //MVP: 
        // 1) listen for cell clicks > update displayCell
        // 2) 
        // 3) show reset button
    //Later: add AI or player 2, select first or second starting position (or X/O)
})();



const gameController = (() => {
    const playerX = Player("X") // calls Player function and assigns X
    const playerO = Player("O") // calls Player function and assigns O

    let round = 1;
    let gameOver = false;

    
    const playRound = (index) => {
        
        gameBoard.board[index] = currentPlayerCharacter()
        
        if (round === 9) {
            gameOver = true;
            return
        }
        round++
        displayController.updateDisplayMsgRound(`Round: ${round}`);
        displayController.updateDisplayMsg(`It's Player ${currentPlayerCharacter()}'s turn!`)
    }
    
    const currentPlayerCharacter = () => {
        return round % 2 === 1 ? playerX.getCharacter() : playerO.getCharacter();
    }
    
    displayController.updateDisplayMsg(`It's Player ${currentPlayerCharacter()}'s turn!`)
    displayController.updateDisplayMsgRound(`Round ${round}`)

    //controls validation?
    const validation = (cell) => {
        console.log(cell);
    }
    
    const checkWinner = (index) => {
        const winScenarios = [
            [0, 1, 2] // col1
            [3, 4, 5] // col2
            [6, 7, 8] // col3
            [0, 3, 6] // row1
            [1, 4, 7] // row2
            [2, 5, 8] // row3
            [0, 4, 8] // diag1
            [2, 4, 6] // diag2
        ];

        return winScenarios

    }

    

    //monitors end of game sequence?
    const getIsGameOver = () => {
        return gameOver;
      };


    return {
        getIsGameOver,
        playRound,
        currentPlayerCharacter,
        validation
    }
})();



// console.log(Player());
// console.log(gameBoard.board);
// displayController.fillBoard();

/*
players 

    will be a factory func() since we need multiple
        object / person (2 total)
            name
            game piece (X or O)
            current player selections (if any)

    mvp will not have name and will auto choose game piece

game
    gameBoard - module
    displayController - module

    validation of player selection:
        is this cell open?
            if no, do nothing or display msg
            if yes,
                does this selection cause an endGameSequence?
                    if no, continue on to next player selection
                    if yes, display msg
    
    end of game sequence:
        when player X or O has 3 in a row (horizontally, vertically, or diagonally),
            trigger end game, display msg
            


DOM manipulations
    1) updating the DIVs for each player selection with associated X or O
    2) updating end of game sequence (win, lose, or draw)
    3) restart or clear button to reset board

*/

//MODULE EXAMPLE//
    // const calculator = (() => {
    //     const add = (a, b) => a + b;
    //     const sub = (a, b) => a - b;
    //     const mul = (a, b) => a * b;
    //     const div = (a, b) => a / b;
    //     return {
    //       add,
    //       sub,
    //       mul,
    //       div,
    //     };
    //   })();
    
    //   calculator.add(3,5); // 8
    //   calculator.sub(6,2); // 4
    //   calculator.mul(14,5534); // 77476
  
/**/

//FACTORY FUN() EXAMPLE//
    //   const Person = (name) => {
    //     const sayName = () => console.log(`my name is ${name}`);
    //     const yellName = () => console.log(`MY NAME IS ${name}`);
    //     return {sayName, yellName};
    //   }
    
    //   const Nerd = (name) => {
    //     // simply create a person and pull out the sayName function with destructuring assignment syntax!
    //     const {sayName, yellName} = Person(name);
    //     const doSomethingNerdy = () => console.log('nerd stuff');
    //     return {sayName, yellName, doSomethingNerdy};
    //   }
    
    //   const Nerdy = (name) => {
    //     const prototype = Person(name);
    //     const doSomethingNerdy = () => console.log('nerdy stuff');
    //     return Object.assign({}, prototype, {doSomethingNerdy});
    //   }
    
    //   const jeff = Nerd('jeff');
    //   const jeffy = Nerdy('jeffy');
    

    //   jeff.sayName(); //my name is jeff
    //   jeff.doSomethingNerdy(); // nerd stuff
    //   jeff.yellName();

    //   jeffy.doSomethingNerdy(); // nerdy stuff
    //   jeffy.yellName();
