const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';', 'q', 'w'];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById('key');
const newGameBtn = document.getElementById('new-game');

function getRandomIndex() {
  return Math.floor(Math.random() * keys.length);
}

function updateKey() {
  currentKeyIndex = getRandomIndex();
  keyDisplay.textContent = keys[currentKeyIndex];
}

function showError(msg) {
  PNotify.error({
    text: msg,
    delay: 1000
  });
}

function showSuccess(msg) {
  PNotify.success({
    text: msg,
    delay: 1000
  });
}

newGameBtn.addEventListener('click', () => {
  updateKey();
  showSuccess("Нова гра розпочата! Натисни правильну клавішу.");
});

document.addEventListener('keydown', (e) => {
  if (e.key === keys[currentKeyIndex]) {
    showSuccess("Правильно!");
    updateKey();
  } else {
    showError(`Помилка! Ви натиснули "${e.key}". Спробуй ще.`);
  }
});

document.addEventListener('keypress', (e) => {
  e.preventDefault();
});

updateKey();
