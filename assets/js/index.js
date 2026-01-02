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

// Цикл з постумовою для того, щоб перевіряти вже отримані дані від користувача
do {
  let password = prompt('Введіть пароль');
  isPasswordCorrect = password === PASSWORD_PATTERN;
  isCancelPressed = password === null;
} while (!isPasswordCorrect && !isCancelPressed);

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

// Цикл for, адже ми фактично перебираємо проміжок чисел від lowerNumbersLimit до upperNumbersLimit
for (let i = lowerNumbersLimit; i <= upperNumbersLimit; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
