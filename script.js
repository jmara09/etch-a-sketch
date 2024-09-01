const defaultGridSize = 16;
let button = document.querySelector(".btn");
let container = document.querySelector(".container");

function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const newRow = document.createElement("div");
    newRow.classList.toggle("row");
    container.appendChild(newRow);
    for (let j = 0; j < size; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.toggle("grid");
      newRow.appendChild(newDiv);
    }
  }
}

createGrid(defaultGridSize);
changeBG();

function changeGrid() {
  let size = parseInt(prompt("How many grid?"));
  if (size > 100) {
    return alert("Please put numbers less than 100");
  }
  container.replaceChildren();
  createGrid(size);
  changeBG();
}

function changeBG() {
  const divs = document.querySelectorAll(".grid");
  divs.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      const box = e.target;
      box.style.cssText = "background-color: black";
    });
  });
}

button.addEventListener("click", changeGrid);
