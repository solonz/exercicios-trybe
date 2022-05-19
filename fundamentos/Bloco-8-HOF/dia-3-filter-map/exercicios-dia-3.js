const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

//   Exercicio 1:

// const myShelf = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)

// console.log(myShelf)

//   Exercicio 2:

// const infoAutores = (objeto) => {
//     return objeto.map((author) => {
//         return {
//             age: author.releaseYear - author.author.birthYear,
//             name: author.author.name,
//         };
//     });
// }
// console.log(infoAutores(books));

// Exercicio 2 refatorado:

// const infoAutores = (objeto) => objeto.map((author) => {
//     return {
//         age: author.releaseYear - author.author.birthYear,
//         author: author.author.name,
//     };
// });
// let ordemAutores = infoAutores(books).sort((a, b) => a.age - b.age);
// console.log(ordemAutores);

// Exercicio 3

// const generosQueAmo = (Array) => {
//     return Array.filter((livros) => {
//         return livros.genre === 'Fantasia' || livros.genre === 'Ficção Científica';
//     });
// };
// console.log(generosQueAmo(books))

// Exercicio 3 refatorado

// const recomendacao = (objetoo) => objetoo.filter((lista) => lista.genre === 'Fantasia' || lista.genre === 'Ficção Científica');
// console.log(recomendacao(books))

// Exercicio 4

// const livrosMaisDe60Anos = books.filter(book => 2022 - book.releaseYear);
// livrosMaisDe60Anos.sort((a,b) => ((a.releaseYear - b.releaseYear)));
// console.log(livrosMaisDe60Anos)

// Exercicio 4 refatorado
const livrosMaisDe60Anos = books.filter(book => (2022 - book.releaseYear) > 60).sort((a, b) => (a.releaseYear - b.releaseYear));
// console.log(livrosMaisDe60Anos)

// Exercicio 5

// const getAutoresFodas = (Array) => Array.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia').map((nome) => nome.author.name).sort();
// console.log(getAutoresFodas(books));

// Exercicio 6
const listaDeLivrosAntigos = livrosMaisDe60Anos.map((array) => array.name);
console.log(listaDeLivrosAntigos)

// Exercicio 7
const misteriousAuthor = (array) => {
    return array.filter((array) => (
        array.author.name[1] === "."
            && array.author.name[4] === "."
            && array.author.name[7] === "."
    ));
};
console.log(misteriousAuthor(books)[0].name);

