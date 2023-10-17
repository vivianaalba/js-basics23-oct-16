function giveMeResult() {
  let firstOperand =
    Number(document.getElementById("firstOperand").value);

  let operator = document.getElementById("operators").value;

  let secondOperand = Number(document.getElementById("secondOperand").value);

  let resultSpan = document.getElementById("result");

  let resultNum = null;

  switch (operator) {
    case '+':
      resultNum = firstOperand + secondOperand;
      resultSpan.innerHTML = resultNum
      break;
    case '-':
      resultNum = firstOperand - secondOperand;
      resultSpan.innerHTML = resultNum
      break;
    case '*':
      resultNum = firstOperand * secondOperand;
      resultSpan.innerHTML = resultNum
      break;
    case '/':
      resultNum = firstOperand / secondOperand;
      resultSpan.innerHTML = resultNum
      break;
    case '**':
      resultNum = firstOperand ** secondOperand;
      resultSpan.innerHTML = resultNum
      break;
    case '%':
      resultNum = firstOperand % secondOperand;
      resultSpan.innerHTML = resultNum
      break;
    case '=':
      if (firstOperand === secondOperand) {
      resultSpan.innerHTML = true}
      else { 
      resultSpan.innerHTML = false}
      break;
    case '>':
      if (firstOperand > secondOperand) {
      resultSpan.innerHTML = true}
      else { 
      resultSpan.innerHTML = false}
      break;
    case '<':
      if (firstOperand < secondOperand) {
      resultSpan.innerHTML = true}
      else { 
      resultSpan.innerHTML = false}
      break;
    case '!=':
      if (firstOperand != secondOperand) {
      resultSpan.innerHTML = true}
      else { 
      resultSpan.innerHTML = false}
      break;
    default:
      console.log('No operator found!')
  }
}

let button = document.getElementById("button");
button.addEventListener('click', giveMeResult)