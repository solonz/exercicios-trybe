// Exercicio Mentoria - Trybe - 4.2
/*
A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso irão pedir.
Para isso escreva um algoritmo que recebe o número da opção escolhida conforme tabela abaixo e retorne a string inteira do respectivo lanche:
"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"
Caso a pessoa escolha uma opção que não existe na tabela acima, retorne:
-------------------------------
"Não temos esta opção ainda :("
-------------------------------
*/

let pedido = (3);

switch (pedido) {
    case 1: console.log("Trybe Lanche Feliz")
        break;
    case 2: console.log("McTrybe")
        break;
    case 3: console.log("TrybeWooper")
        break;
    case 4: console.log("X-Trybe")
        break;
    case 5: console.log("Triplo Trybe com JS")
        break;
    default: console.log("Não temos esta opção ainda :(")
}