const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const handelInput = (event) => {
  const value = event.target.value.trim();
  spanEl.textContent = value ? value : "Anonymous";
};

inputEl.addEventListener("input", handelInput);
