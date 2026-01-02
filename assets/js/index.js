const sideOfSquare = 5;
const squareFillSymbol = '*';
const squareEmptySymbol = ' ';
let squareRow;

// Основний цикл для перебігу рядків квадрату
for (let i = 1; i <= sideOfSquare; i++) {
  squareRow = '';
  // Вкладений цикл для перебігу стовпців квадрату (точніше, кожного елементу i-го рядка)
  for (let j = 1; j <= sideOfSquare; j++) {
    // Умова для повного заповнення рядку (першого й останнього)
    if (i === 1 || i === sideOfSquare) {
      squareRow += squareFillSymbol;
      // Складена умова, яка відповідає за заповнення першого й останнього стовпця, а також діагоналі квадрата
    } else if (j === 1 || j === sideOfSquare || i === j) {
      squareRow += squareFillSymbol;
      // У випадку необхідності пропуску
    } else {
      squareRow += squareEmptySymbol;
    }
  }
  // Вивід одного рядка
  console.log(squareRow);
}
