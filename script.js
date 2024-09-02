const defaultGridSize = 16;
let userSize = 0;
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
  userSize = parseInt(prompt("How many grid?"));
  if (userSize > 100) {
    return alert("Please put numbers less than 100");
  }
  container.replaceChildren();
  createGrid(userSize);
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

const colorize = document.querySelector(".color");

function changeColor() {
  container.replaceChildren();
  if (userSize === 0) {
    createGrid(defaultGridSize);
  } else {
    createGrid(userSize);
  }

  const divs = document.querySelectorAll(".grid");
  divs.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      const box = e.target;
      box.style.cssText = `background-color: rgb(${
        Math.floor(Math.random() * 255) + 1
      }, ${Math.floor(Math.random() * 255) + 1}, ${
        Math.floor(Math.random() * 255) + 1
      })`;
    });
  });
}

colorize.addEventListener("click", changeColor);

const darker = document.querySelector(".darken");

function darkening() {
  container.replaceChildren();
  if (userSize === 0) {
    createGrid(defaultGridSize);
  } else {
    createGrid(userSize);
  }

  let percent = 0;
  const divs = document.querySelectorAll(".grid");
  divs.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      if (percent === 100) {
        percent = 10;
      } else {
        percent += 10;
      }
      console.log(percent);
      const box = e.target;
      box.style.cssText = `background-color: black; opacity: ${percent}%`;
    });
  });
}

darker.addEventListener("click", darkening);
