const lowerLimit = 1;
const upperLimit = 100;
let sum = 0; // Змінна акумулятор

// Цикл for, адже ми фактично перебираємо проміжок чисел від lowerLimit до upperLimit
for (let i = lowerLimit; i <= upperLimit; i++) {
  sum += i;
}

console.log(`Сума чисел від ${lowerLimit} до ${upperLimit} = ${sum}`);
