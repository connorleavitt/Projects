let food = { x: 1, y: 10 };
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    //eat food, make snake longer
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}
