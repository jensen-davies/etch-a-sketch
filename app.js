function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function buildRow(m=4) {
  const board = document.querySelector('#board');
  const row = document.createElement('div');
  row.classList.add('row');
  board.appendChild(row);
  for (let i = 0; i < m; i ++) {
    const square = document.createElement('div');
    square.classList.add('square');
    row.appendChild(square);
  }
}

function buildBoard(m=4) {
  for (let i = 0; i < m; i++) {
    buildRow(m);
  }
}

function setupSquares(m) {
  buildBoard(m);
  const squares = document.querySelectorAll('.square');
  squares.forEach(item => item.addEventListener('mouseover', () => {
    item.classList.add('colored');
  }))
}


const resetBtn = document.querySelector('button.reset');
const resizeBtn = document.querySelector('button.size');

resetBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach(item => item.classList.remove('colored'));
});


const slider = document.getElementById("myRange");
let output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  m = this.value;
  removeAllChildren(board);
  setupSquares(m)
}

// resizeBtn.addEventListener('click', () => {
//   let m = prompt('Input board size', '16');
//   if (m === null) {
//     return;
//   }
//   removeAllChildren(board);
//   setupSquares(m);
// });

setupSquares(16);