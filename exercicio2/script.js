/*
# Exercício 2

Escreva um código que receba três valores. 
Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano
 que responda se a pessoa está cursando alguma faculdade.
Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;
Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.
<details>
<summary>Exemplo</summary>
Caso a primeira pessoa tenha idade >=18:
<b>"A pessoa é maior de idade"</b>
e caso não seja:
<b>"A pessoa é menor de idade"</b>
</details>

let idade;
let isMaiorIdade;
let isCursandoOutraFaculdade;

if(){

}else{
	
}

*/
let idade = Number (prompt("Qual sua idade?"))
//console.log("Sua idade é:", idade)

let ensinoMedio = confirm("Terminou o Ensino Médio?")
//console.log("Terminou o ensino Médio?", ensinoMedio)
let resposta = 0;
//let faculdade = prompt("Está cursando alguma faculdade?")
//console.log("Está cursando alguma faculdade", faculdade)
//console.log("=============================")

if (idade >=18) {
    console.log("A pessoa é maior de idade.")
} else {
    console.log("A pessoa é menor de idade.")
}

if (ensinoMedio === true) {
    console.log("A pessoa terminou o Ensino Médio.")
    let faculdade = confirm("Está cursando alguma faculdade?")
    resposta = faculdade
} else {
    console.log("A pessoa ainda não terminou o Ensino Médio.")
}

if (resposta !== true) {
    console.log("A pessoa não está cursando uma faculdade.")
} else {
    console.log("A pessoa está cursando faculdade.")
}
//console.log("=============================")