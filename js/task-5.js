function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const onBtnClick = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanEl.textContent = color;
};

btnEl.addEventListener("click", onBtnClick);
