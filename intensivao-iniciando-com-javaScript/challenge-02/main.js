// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = prompt(`Enter the first number`)
let numberTwo = prompt(`Enter the second number`)

function soma(numberOne, numberTwo) {
  let soma = numberOne + numberTwo
  return `The sum of the two numbers is ${soma}`
}

alert(soma(Number(numberOne), Number(numberTwo)))