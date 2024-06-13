/*
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.
*/


let firstNumber = prompt(`Digite o primeiro número`);

let secondNumber = prompt (`Digite o segundo número`);

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

let sum = firstNumber + secondNumber ;
let sub = firstNumber - secondNumber ;
let mult = firstNumber * secondNumber ;
let div = firstNumber / secondNumber ;
let restDiv = firstNumber % secondNumber ;

alert(`A soma é : ${sum}`)
alert(`A subtração é : ${sub}`)
alert(`A multiplicação é : ${mult}`)
alert(`A divisão é : ${div}`)
alert(`O resto da divisão é : ${restDiv}`)
