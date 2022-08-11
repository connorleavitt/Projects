const DEFAULT_PEN_COLOR = '#6a0dad';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentPenColor = DEFAULT_PEN_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;
let currentlyActive = false;

function setCurrentPenColor(newPenColor) {
    currentPenColor = newPenColor;
  }

function setCurrentSize(newSize) {
    currentSize = newSize;
  }



const container = document.querySelector('#container');
const userGridSize = document.querySelector('#grid-size');
const clearGridBtn = document.querySelector('#clear-grid');
const penColorChoice = document.getElementById("penColor");
const clearButton = document.getElementById("clear-grid");
const cell = document.getElementsByClassName("grid-item");

userGridSize.onmousemove = (e) => gridSizeValue(e.target.value)
userGridSize.onchange = (e) => updateSize(e.target.value)
penColorChoice.oninput = (e) => setCurrentPenColor(e.target.value)
clearButton.onclick = () => resetGrid()

function gridSizeValue(value) {
    document.getElementById("gridSizeValue").innerHTML = `${value} x ${value}`;
}

function updateSize(value) {
    setCurrentSize(value)
    gridSizeValue(value)
    resetGrid(value)
}

function resetGrid() {
    clearGrid();
    generateGrid(currentSize);
}

function clearGrid() {
    container.innerHTML = ''
    // container.replaceChildren();
  }


function generateGrid(size) {
    clearGrid()
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let i = 0; i < (size * size); i++) {
        let newGridDiv = document.createElement('div');
        newGridDiv.classList.add("grid-item");
        container.append(newGridDiv);
    }
}

function togglePen() {
    if (!currentlyActive) {
        cell.forEach( e => {
            e.addEventListener('mouseleave', activatePen)
        })
    }
}

container.addEventListener('mousedown', () => togglePen());

function activatePen(e) {
    e.target.style.backgroundColor = currentPenColor
}


window.onload = () => {
    generateGrid(DEFAULT_SIZE)
  }