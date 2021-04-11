var generateButton = document.querySelector(".form__btn--play");
var resetButton = document.querySelector(".form__btn--reset");
var minValue = document.querySelector(".form__input-min");
var maxValue = document.querySelector(".form__input-max");
var result = document.querySelector(".form__input-result");
var arr = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function generateRandomNumber() {
  var min = +minValue.value;
  var max = +maxValue.value;
  console.log("min", min);
  console.log("max", max);

  if (min % 1 !== 0 || max % 1 !== 0) {
    result.innerHTML = "error";
    return;
  }

  if (arr.length === max - min + 1) {
    result.innerHTML = "Generated number: Elements are over";
    generateButton.disabled = true;
    generateButton.classList.add("form__btn--disabled");
    return;
  }
  var random = getRandomNumber(min, max);

  while (arr.includes(random)) {
    random = getRandomNumber(min, max);
  }
  arr.push(random);
  result.innerHTML = `Generated number ${random}`;
}

function resetData() {
  generateRandomNumber();
  arr = [];
  minValue.value = "";
  maxValue.value = "";
  result.innerHTML = "";
}

generateButton.addEventListener("click", generateRandomNumber);
resetButton.addEventListener("click", resetData);
