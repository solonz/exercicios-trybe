// // 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. 
// // O código deve retornar em sequência 2, 15 e 54. Dica: use spread operator.

// const rectangleArea = (width, height) => width * height;

// const rectangle1 = [1, 2];
// const rectangle2 = [3, 5];
// const rectangle3 = [6, 9];
// const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//     rectangleArea() // altere a chamada da funcao rectangleArea
//     console.log(rectangle[0] * rectangle[1]);
// });

// // 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// // Dica: use parâmetro rest.

// const sum = (...elementos) => {
//     return elementos.reduce((acc, curr) => acc + curr);
// };
// console.log(sum(12, 43, 22, 10))

// // 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, 
// // cada carro é modelado como um array. Porém, essa modelagem está baixo nível. 
// // Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// // Dica: use array destructuring e abbreviation object literal.

// const palio = ['Palio', 'Fiat', 2019];
// const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
// const chiron = ['Chiron', 'Bugatti', 2016];

// // escreva toObject abaixo

// // const toObject = ([modelo, carro, ano]) => {
// //     return {modelo, carro, ano}
// // }

// // console.log(toObject(palio));

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
// Dica: use object destructuring.

// const ships = [
//     {
//         naime: 'Titanic',
//         length: 269.1,
//         measurementUnit: 'meters',
//     },
//     {
//         naime: 'Queen Mary 2',
//         length: 1132,
//         measurementUnit: 'feet',
//     },
//     {
//         naime: 'Yamato',
//         length: 256,
//         measurementUnit: 'meters',
//     },
// ];

// // escreva shipLength abaixo

// const shipLength = ({naime, length, measurementUnit}) => (`${naime} is ${length} ${measurementUnit} long`);

// console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

// 9 - Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
// Dica: use object destructuring e spread operator.
// OBS: As estações do ano aqui descritas têm base nas estações do hemisfério norte.


// const yearSeasons = {
//     spring: ['March', 'April', 'May'],
//     summer: ['June', 'July', 'August'],
//     autumn: ['September', 'October', 'November'],
//     winter: ['December', 'January', 'February'],
//   };

// const allSeasons = ({spring, summer, autumn, winter}) => [...spring, ...summer, ...autumn, ...winter];

// console.log(allSeasons(yearSeasons))

// 🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring.

// const people = [
//     {
//       name: 'Nicole',
//       bornIn: 1992,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Harry',
//       bornIn: 2008,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Toby',
//       bornIn: 1901,
//       nationality: 'Australian',
//     },
//     {
//       name: 'Frida',
//       bornIn: 1960,
//       nationality: 'Dannish',
//     },
//     {
//       name: 'Fernando',
//       bornIn: 2001,
//       nationality: 'Brazilian',
//     },
//   ];
  
//   // escreva filterPeople abaixo

//   const LastCenturyOnly = (object) => object.filter(({bornIn, nationality}) => bornIn > 1900 && bornIn <= 2000 && nationality === 'Australian');
//   console.log(LastCenturyOnly(people))

// 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring.

// const myList = [1, 2, 3];

// // escreva swap abaixo

// const swap = ([um, dois, tres]) => [tres, dois, um]
// console.log(swap(myList));

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params.

// escreva greet abaixo

const greet = (nome, saudacao = 'Hi', colanimim = ':)') => `${saudacao} ${nome} seu fofo, ${colanimim}\n`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'