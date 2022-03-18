const gridDimension = [500, 500];
const cellDimension = 10;
let gridColor = [];

const w = gridDimension[0] / cellDimension;
const h = gridDimension[1] / cellDimension;

const d = document;

const gridDOM = N.Get.class('grid', document)[0];
let grid = [];

for (let j = 0; j < h; j++) {
  for (let i = 0; i < w; i++) {
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

  start.removeEventListener('click', startHandler);
  start.firstChild.data = 'Stop';
  start.addEventListener('click', cancelHandler);
  function cancelHandler() {
    clearInterval(id);
    start.firstChild.data = 'Start';

    start.addEventListener('click', startHandler);

  }

  const id = setInterval(() => {
    const oldGrid = JSON.parse(JSON.stringify(grid));

    for (let j = 0; j < h; j++) {
      for (let i = 0; i < w; i++) {
        let cellCount = 0;
        let iEdge1 = i - 1, iEdge2 = i + 1, jEdge1 = j - 1, jEdge2 = j + 1;
        i == 0 && (iEdge1 = 0);
        i == w - 1 && (iEdge2 = w - 1);
        j == 0 && (jEdge1 = 0);
        j == h - 1 && (jEdge2 = h - 1)

        for (let jp = jEdge1; jp <= jEdge2; jp++) {
          for (let ip = iEdge1; ip <= iEdge2; ip++) {
            if (jp == j && ip == i) {

            } else {
              oldGrid[fromCartToIndex(ip, jp)].alive && cellCount++;
            }
          }
        }

        if (cellCount >= 2) {
          cellCount > 3 && grid[fromCartToIndex(i, j)].die();
          cellCount == 3 && grid[fromCartToIndex(i, j)].live();
        } else {
          grid[fromCartToIndex(i, j)].die()
        }


      }
    }

  }, 1000 / 20)
}