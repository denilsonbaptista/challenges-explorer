const students = [
  {
    name: "Denilson",
    scoreOne: 10,
    scoreTwo: 9,
  },
  {
    name: "Ana",
    scoreOne: 7,
    scoreTwo: 10,
  },
  {
    name: "Luuh",
    scoreOne: 8,
    scoreTwo: 8,
  },
  {
    name: "Zaay",
    scoreOne: 10,
    scoreTwo: 7,
  },
  {
    name: "Demilton",
    scoreOne: 6,
    scoreTwo: 5,
  },
  {
    name: "Juliana",
    scoreOne: 7,
    scoreTwo: 6,
  },
]

function average(scoreOne, scoreTwo) {
  return (scoreOne + scoreTwo) / 2
}

function printAverage(student) {
  let averageStudent = average(student.scoreOne, student.scoreTwo)
  console.log(averageStudent)

  if (averageStudent >= 7) {
    return `
    A média do(a) aluno(a) ${student.name} é ${averageStudent}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
    `
  } else {
    return `
    A média do(a) aluno(a) ${student.name} é ${averageStudent}
    Não foi dessa vez, ${student.name}! Tente novamente
    `
  }
}

for (let student of students) {
  let averageStudent = printAverage(student)
  alert(averageStudent)
}
