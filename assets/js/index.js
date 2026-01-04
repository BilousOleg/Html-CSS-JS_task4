// Завдання 1

const lowerNumberLimit = 1;
const upperNumberLimit = 10;

// for, оскільки ми фактично ПЕРЕБИРАЄМО проміжок від lowerNumberLimit до upperNumberLimit
for (let i = lowerNumberLimit; i <= upperNumberLimit; i++) {
  console.log(i * i);
}

// Завдання 2

const PASSWORD_PATTERN = 'zxcvbn';
let isPasswordCorrect = false; // Винесено в окрему змінну для покращення читабельності коду та уникнення повторень
let isCancelPressed = false; // Винесено в окрему змінну для покращення читабельності коду та уникнення повторень

while (!isPasswordCorrect && !isCancelPressed) {
  let password = prompt('Введіть пароль');
  isPasswordCorrect = password === PASSWORD_PATTERN;
  isCancelPressed = password === null;
}

if (isPasswordCorrect && !isCancelPressed) {
  console.log('Ви успішно увійшли в систему');
}

// Завдання 3

const lowerLimit = 1;
const upperLimit = 100;
let sum = 0; // Змінна акумулятор

// Цикл for, адже ми фактично перебираємо проміжок чисел від lowerLimit до upperLimit
for (let i = lowerLimit; i <= upperLimit; i++) {
  sum += i;
}

console.log(`Сума чисел від ${lowerLimit} до ${upperLimit} = ${sum}`);

// Завдання 4

const lowerNumbersLimit = 10;
const upperNumbersLimit = 50;
const divisor = 5;

// Цикл for, адже ми фактично перебираємо проміжок чисел від lowerNumbersLimit до upperNumbersLimit
for (let i = lowerNumbersLimit; i <= upperNumbersLimit; i++) {
  if (i % divisor === 0) {
    console.log(i);
  }
}

// Завдання 5

const triangleSizeInput = prompt('Введіть розмір трикутника');
const triangleDotSymbol = '*';
let triangleString = '';

if (triangleSizeInput !== null) {
  const triangleSize = Number(triangleSizeInput);
  if (Number.isFinite(triangleSize) && triangleSize >= 0) {
    for (let i = 1; i <= triangleSize; i++) {
      triangleString += triangleDotSymbol;
      console.log(triangleString);
    }
  } else {
    alert('Ви ввели некоректне значення');
  }
}

// Завдання 6

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

// Завдання 7*

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
