/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/


let nameStudent = prompt(`Digite o nome do(a) aluno(a)`)

let firstNote = prompt(`Digite a nota da primeira prova`)

let secondNote = prompt(`Digite a nota da segunda prova`)

let thirdNote = prompt(`Digite a nota da terceira prova`)

firstNote = Number(firstNote)
secondNote = Number(secondNote)
thirdNote = Number(thirdNote)

let average = (firstNote+secondNote+thirdNote) /3;

average = average.toFixed(2)


if(average >= 6){
     alert(`Parabéns!  ${nameStudent} você foi aprovado com a média de ${average}`)
}else{
     alert(`${nameStudent} infelizmente você reprovou com a media de ${average} estude e de seu melhor na prova de recuperação, boa sorte!`)
    }

