const itemsEl = document.querySelectorAll(".item");

console.log("Number of categories:", itemsEl.length);

itemsEl.forEach((item) => {
  const categoryEl = item.querySelector("h2");
  const elementEl = item.querySelectorAll("li");

  console.log("Category:", categoryEl.textContent);
  console.log("Elements:", elementEl.length);
});
