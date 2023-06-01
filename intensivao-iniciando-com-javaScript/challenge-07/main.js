// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let numberOne = prompt("Enter the first number")
let numberTwo = prompt("Enter the second number")

function calculation (numberOne, numberTwo) {
  return numberOne * numberTwo
}

alert(calculation(Number(numberOne), Number(numberTwo)))