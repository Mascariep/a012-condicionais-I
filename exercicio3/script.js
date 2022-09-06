/*
# Exercício 3

Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" 
e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é 
igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. 
O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 


let nacionalidade //= adicione o prompt aqui
*/

let nacionalidade = prompt("Escreva aqui sua nacionalidade?").toLocaleLowerCase()
console.log("Sua nacionalidade é:", nacionalidade)

if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade === "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana") {
    console.log("Nacionalidade encontrada")
} else {
    console.log("Nacionalidade não encontrada")
}
