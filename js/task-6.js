function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const inputNumberEl = document.querySelector("input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  boxesEl.innerHTML = "";
  const boxes = [];
  let size = 30;

  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);

    size += 10;
  }

  boxesEl.append(...boxes);
};

const handleCreateClick = () => {
  const amount = inputNumberEl.value;
  if (amount < 1 || amount > 100) {
    inputNumberEl.value = "";
    return;
  }

  createBoxes(amount);
  inputNumberEl.value = "";
};
const handleDestoyClick = () => {
  inputNumberEl.value = "";
  boxesEl.innerHTML = "";
};

createBtnEl.addEventListener("click", handleCreateClick);
destroyBtnEl.addEventListener("click", handleDestoyClick);
