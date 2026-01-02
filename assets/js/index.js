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
