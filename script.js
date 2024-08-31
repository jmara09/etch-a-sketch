let button = document.querySelector(".btn");

function addGrid() {
  let size = parseInt(prompt("How many grid?"));
  if (size > 100) {
    return alert("Please put numbers less than 100");
  }

  let createDiv = document.createElement("Div");
  let container = document.querySelector(".container");
  createDiv.classList.toggle("grid");
  container.appendChild(createDiv);
}

button.addEventListener("click", addGrid);
