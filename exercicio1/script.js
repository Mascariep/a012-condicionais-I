/*# Exercício 1

Crie um código que receba uma const numérica qualquer. 
Crie um `if` para verificar se o número guardado na const é **par**. 
Caso seja, imprima no console a mensagem: "o número é par".


const num = //seu numero aqui

if(){
    console.log("sua mensagem aqui");
}

*/
const num = prompt("Qual seu numero?")
console.log("Seu numero é:", num)


if((num % 2)=== 0) {
    console.log("O número", num, "é par")
} else {
    console.log("O número", num, "é ímpar")
}

