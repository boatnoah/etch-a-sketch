const DEFAULTSIZE = 16;
const HEIGHT = 300;
const WIDTH = 300;
let userSize = DEFAULTSIZE;

// create cells
const grid = document.querySelector(".grid");
const button = document.getElementById("reset");
const createGrid = (size) => {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.width = `${WIDTH}px`;
  grid.style.height = `${HEIGHT}px`;
  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("mouseover", () => {
      cell.classList.add("colored");
    });
    grid.appendChild(cell);
  }
};

createGrid(userSize);
const resetGrid = () => {
  userSize = parseInt(prompt("Enter a grid size"));
  grid.innerHTML = "";
  createGrid(userSize);
};

button.addEventListener("click", resetGrid);
