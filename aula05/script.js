
/*
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.
*/

let shoppingList = [];

for(i=0;i<10;i++){
    shoppingList[i] = prompt(`Digite o ${i+1} item`)  
}

alert(shoppingList)

console.log(shoppingList)