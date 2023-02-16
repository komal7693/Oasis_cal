function calcutator(value) {
  document.getElementById("expression").value += value;
}

function backspace() {
  let expression = document.getElementById("expression").value;
  document.getElementById("expression").value = expression.substring(0, expression.length - 1);
}

function clearExpression() {
  document.getElementById("expression").value = "";
}

function calculate() {
  let expression = document.getElementById("expression").value;
  document.getElementById("expression").value = eval(expression);
}
