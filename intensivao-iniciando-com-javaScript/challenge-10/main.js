// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const value = prompt(`Enter a number`)
const oddNumber = Number(value) % 2 === 1

if (oddNumber) {
  alert(`${value} is an odd number`)
} else {
  alert(`${value} is not an odd number`)
}
