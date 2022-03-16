const gridDimension = [500, 500];
const cellDimension = 10;
let gridColor = [];

const d = document;

const gridDOM = N.Get.class('grid', document)[0];
const grid = [];

for (let i = 0; i < gridDimension[0] / cellDimension; i++) {
  for (let j = 0; j < gridDimension[1] / cellDimension; j++) {
    let c = new Cell(i, j)
    grid.push(c);
    gridDOM.appendChild(c.dom);
  }
}