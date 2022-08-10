const container = document.querySelector('#container');


function generateGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let newGridDiv = document.createElement('div');
        newGridDiv.classList.add("grid");
        container.append(newGridDiv);
    }
}
generateGrid(2,2);

