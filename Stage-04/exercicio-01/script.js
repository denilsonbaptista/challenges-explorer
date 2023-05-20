const numberOne = Number(prompt("Digite o número 1:"))
const numberTwo = Number(prompt("Digite o númeto 2:"))

const calculations = [
  {
    message: `A soma dos dois números é: `,
    calculation: numberOne + numberTwo,
  },
  {
    message: `A subtração dos dois números é: `,
    calculation: numberOne - numberTwo,
  },
  {
    message: `A multiplicação dos dois números é: `,
    calculation: numberOne * numberTwo,
  },
  {
    message: `A divisão dos dois números é: `,
    calculation: numberOne / numberTwo,
  },
  {
    message: `O resto da divisão dos dois números é: `,
    calculation: numberOne % numberTwo,
  },
]

for (let calculation of calculations) {
  alert(calculation.message + calculation.calculation)
}

if (calculations[0].calculation % 2 === 0) {
  alert(`A soma dos dois número é par: ${calculations[0].calculation}`)
} else {
  alert(`A soma dos dois número é impar: ${calculations[0].calculation}`)
}

if (numberOne === numberTwo) {
  alert("Os números inseridos são iguais")
} else {
  alert("Os números inseridos são diferentes")
}
