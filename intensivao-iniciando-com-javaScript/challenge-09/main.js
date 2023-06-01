// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const value = prompt(`Enter a number`)
const evenNumber = Number(value) % 2 === 0

if (evenNumber) {
  alert(`${value} is an even number`)
} else {
  alert(`${value} is not an even number`)
}
