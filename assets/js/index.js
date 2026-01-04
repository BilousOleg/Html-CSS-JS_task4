const PASSWORD_PATTERN = 'zxcvbn';
let isPasswordCorrect = false; // Винесено в окрему змінну для покращення читабельності коду та уникнення повторень
let isPromptActive = true; // Винесено в окрему змінну для покращення читабельності коду та уникнення повторень

while (isPasswordCorrect === false && isPromptActive) {
  let password = prompt('Введіть пароль');
  isPasswordCorrect = password === PASSWORD_PATTERN;
  isPromptActive = password !== null;
}

if (isPasswordCorrect && isPromptActive) {
  console.log('Ви успішно увійшли в систему');
} else {
  console.log('Операцію відмінено');
}
