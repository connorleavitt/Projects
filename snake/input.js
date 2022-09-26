import { main } from "./game.js";

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y != 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y != 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x != 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x != 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export let SNAKE_SPEED;
export let foodRate;

const gameSetup = document.querySelector(".game-info");
const mainContainer = document.querySelector(".main");
let reloadBtn = document.querySelector(".reload");
const speedSlider = document.querySelector("#speed");
const currentSpeed = document.querySelector(".current-speed");
const easyBtn = document.querySelector(".difficulty-button-easy");
const hardBtn = document.querySelector(".difficulty-button-hard");

const startGameBtn = document.querySelector(".game-info--start");

reloadBtn.addEventListener("click", () => {
  location.reload();
});

speedSlider.addEventListener("change", () => {
  currentSpeed.innerText = speedSlider.value;
});

function findSnakeSpeed() {
  return speedSlider.value;
}

function startGame() {
  SNAKE_SPEED = findSnakeSpeed();
  foodRate = getFoodRate();
  gameSetup.classList.remove("show");
  const gameBoard = document.createElement("section");
  gameBoard.classList.add("gameboard");
  gameBoard.setAttribute("id", "gameboard");
  mainContainer.appendChild(gameBoard);
  main();
}

export function getFoodRate() {
  let foodRate;
  if (easyBtn.classList.contains("selected")) {
    console.log("easy");
    return (foodRate = 3);
  }
  if (hardBtn.classList.contains("selected")) return (foodRate = 1);
  else return (foodRate = 1);
}

easyBtn.addEventListener("click", () => {
  if (hardBtn.classList.contains("selected")) {
    hardBtn.classList.remove("selected");
  }
  easyBtn.classList.add("selected");
  return;
});

hardBtn.addEventListener("click", () => {
  if (easyBtn.classList.contains("selected")) {
    easyBtn.classList.remove("selected");
  }
  hardBtn.classList.add("selected");
  return;
});

startGameBtn.addEventListener("click", () => {
  startGame();
});

window.addEventListener("keydown", (e) => {
  if (gameSetup.classList.contains("show")) {
    if (e.key === "Enter") {
      startGame();
    }
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

window.addEventListener("load", () => {
  speedSlider.value = 5;
  currentSpeed.innerText = speedSlider.value;
});
