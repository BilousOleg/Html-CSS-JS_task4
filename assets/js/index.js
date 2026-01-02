const triangleSizeInput = prompt('Введіть розмір трикутника');
let triangleDot = '';

if (triangleSizeInput !== null) {
  const triangleSize = Number(triangleSizeInput);
  if (Number.isFinite(triangleSize) && triangleSize >= 0) {
    for (let i = 1; i <= triangleSize; i++) {
      triangleDot += '*';
      console.log(triangleDot);
    }
  } else {
    alert('Ви ввели некоректне значення');
  }
}
