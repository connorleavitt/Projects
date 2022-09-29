import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";
import { foodRate } from "./input.js";

let food = getRandomFoodPosition();

export function update() {
  let EXPANSION_RATE = foodRate;
  if (onSnake(food)) {
    //eat food, make snake longer
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}