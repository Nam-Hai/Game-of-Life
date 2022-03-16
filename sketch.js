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

function fromCartToIndex(x, y) {
  return x + y * gridDimension[1] / cellDimension
}

const start = N.Get.class('start')[0];

start.addEventListener('click', startHandler);

function startHandler() {

  setInterval(() => {
    for (let i = 1; i < gridDimension[0] / cellDimension - 1; i++) {
      for (let j = 1; j < gridDimension[1] / cellDimension - 1; j++) {

        // penser a faire une copie du grid state, car sinon l'update va influencer 
      }
    }

  }, 1000 / 60)
}