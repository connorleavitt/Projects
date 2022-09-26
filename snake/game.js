import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

import { outsideGrid } from "./grid.js";

import { SNAKE_SPEED } from "./input.js";

let lastRenderTime = 0;
let gameOver = false;

export function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  // console.log("render", secondsSinceLastRender);

  update();
  draw();
}

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  const gameBoard = document.getElementById("gameboard");

  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

// add UI (3 radio btns; slow, med, fast) for snake speed selection
// add UI for snake expansion rate (easy v hard || small vs big) selection
// add UI for adjusting grid size
