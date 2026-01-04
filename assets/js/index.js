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
