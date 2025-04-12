interface Livro{
    titulo: string;
    autor: String;
    anoPublicacao: number;
}

const livro1: Livro = {
    titulo: "teste1",
    autor: "Vitor1",
    anoPublicacao: 2020
}

const livro2: Livro = {
    titulo: "teste2",
    autor: "Vitor2",
    anoPublicacao: 2021
}

console.log(livro1);
console.log(livro2);