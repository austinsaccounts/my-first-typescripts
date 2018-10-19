var findSum = function(firstValue: number, secondValue: number) {
  var sum: number = firstValue + secondValue;
  alert('the sum of 2 numbers is ' + sum);
}

var firstNumber = parseInt(prompt('whats the first number'));
var secondNumber = parseInt(prompt('enter another number'));
findSum(firstNumber, secondNumber);

