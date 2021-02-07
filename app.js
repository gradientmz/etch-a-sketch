window.addEventListener("load", setGrid(32));

function setGrid(size) {
  clearGrid()
  setGridSize(size);
  fillGrid(size);
}

function setGridSize(size) {
  const gridContainer = document.querySelector("#grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    const gridContainer = document.querySelector("#grid-container");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changeColor(e) {

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var h = randomInt(0, 360);
  var s = randomInt(42, 98);
  var l = randomInt(40, 90);

  e.target.style.backgroundColor = `hsl(${h},${s}%,${l}%)`;
}

function clearGrid() {
  const gridContainer = document.querySelector("#grid-container");
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}
