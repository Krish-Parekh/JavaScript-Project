var calculatorKeys = document.querySelectorAll("button");
var display = document.querySelector(".calculator-display");
var evaluationString = "";
calculatorKeys.forEach((element) => {
  element.addEventListener("click", function () {
    var value = element.innerText;
    handleKeysInput(value);
  });
});

function handleKeysInput(value) {
  switch (value) {
    case "=":
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
