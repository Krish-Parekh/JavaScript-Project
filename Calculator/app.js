var calculatorKeys = document.querySelectorAll("button");
var display = document.querySelector(".calculator-display");
var evaluationString = "";
calculatorKeys.forEach((element) => {
  element.addEventListener("click", function () {
    var value = element.innerText;
    handleKeysInput(value);
  });
});

document.addEventListener("keypress", function (event) {
  var key = event.key;
  console.log(key + typeof key);
  handleKeysInput(key);
});

function handleKeysInput(value) {
  switch (value) {
    case "=":
    case "Enter":
      handleEvaluation();
      break;

    case "AC":
      evaluationString = "";
      display.value = evaluationString;
      break;
    default:
      evaluationString += value;
      display.value = evaluationString;
      break;
  }
}

function handleEvaluation() {
  try {
    evaluationString = eval(evaluationString);
    console.log(evaluationString);
    if (
      !isFinite(evaluationString) ||
      isNaN(evaluationString) ||
      window.undefined === evaluationString
    ) {
      display.value = "";
      evaluationString = "";
      display.placeholder = "Error";
    } else {
      display.value = evaluationString;
    }
  } catch (e) {
    display.value = "";
    evaluationString = "";
    display.placeholder = "Error";
  }
}
