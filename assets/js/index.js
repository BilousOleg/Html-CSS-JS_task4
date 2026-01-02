const lowerNumberLimit = 1;
const upperNumberLimit = 100;
let sum = 0; // Змінна акумулятор

// Цикл for, адже ми фактично перебираємо проміжок чисел від lowerNumberLimit до upperNumberLimit
for (let i = lowerNumberLimit; i <= upperNumberLimit; i++) {
  sum += i;
}

console.log(
  `Сума чисел від ${lowerNumberLimit} до ${upperNumberLimit} = ${sum}`
);
