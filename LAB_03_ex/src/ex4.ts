type Funcionario = {
    nome: String,
    cargo: String
}

const funcionairos : Funcionario[] = [
    {nome : "Marcos", cargo : "Desenvolvedor"},
    {nome : "Fernanda", cargo : "Gerente" },
    {nome : "Carlos", cargo : "Desenvolvedor" },
    {nome : "Joana", cargo : "Analista" }
];
let cargoDesejavel : String = "Desenvolvedor";

let funcionariosDesenvovledores = funcionairos.filter(funcionario => funcionario.cargo == cargoDesejavel);

console.log(funcionariosDesenvovledores);