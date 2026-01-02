const squareSide = 5;
const squareSymbolFilled = '*';
const squareSymbolEmpty = ' ';
let rowOfSquare;

// Основний цикл для перебігу рядків квадрату
for (let i = 1; i <= squareSide; i++) {
  rowOfSquare = '';
  // Вкладений цикл для перебігу стовпців квадрату (точніше, кожного елементу i-го рядка)
  for (let j = 1; j <= squareSide; j++) {
    // Умова для повного заповнення рядку (першого й останнього)
    if (i === 1 || i === squareSide) {
      rowOfSquare += squareSymbolFilled;
      // Складена умова, яка відповідає за заповнення першого й останнього стовпця, а також ЗВОРОТНЬОЇ діагоналі квадрата
    } else if (j === 1 || j === squareSide || j === squareSide - i + 1) {
      rowOfSquare += squareSymbolFilled;
      // У випадку необхідності пропуску
    } else {
      rowOfSquare += squareSymbolEmpty;
    }
  }
  // Вивід одного рядка
  console.log(rowOfSquare);
}
