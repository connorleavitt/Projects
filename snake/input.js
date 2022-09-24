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

const gameSetup = document.querySelector(".game-info");

const reload = document.querySelector(".reload");
const speedSlider = document.querySelector("#speed");
const currentSpeed = document.querySelector(".current-speed");
const startGameBtn = document.querySelector(".game-info--start");

speedSlider.addEventListener("change", () => {
  currentSpeed.innerText = speedSlider.value;
});

reload.addEventListener("click", () => {
  location.reload();
});

gameSetup.addEventListener("click", (e) => {});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}

window.addEventListener("load", (event) => {
  speedSlider.value = 2;
  currentSpeed.innerText = speedSlider.value;
});
