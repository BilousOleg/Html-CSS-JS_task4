const lowerNumbersLimit = 10;
const upperNumbersLimit = 50;

// Цикл for, адже ми фактично перебираємо проміжок чисел від lowerNumbersLimit до upperNumbersLimit
for (let i = lowerNumbersLimit; i <= upperNumbersLimit; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
