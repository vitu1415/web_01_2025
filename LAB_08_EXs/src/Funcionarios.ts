interface Funcionario{
    nome: String,
    idade: number,
    registro: number,
    salario: number
    dataNascimento: Date,
    ativo: boolean
}

const Funcionario: Funcionario = {
    nome: "Vitor Alves",
    idade: 19,
    registro: 1,
    salario: 500,
    dataNascimento: new Date("2006-01-08"),
    ativo: true
}

console.log(Funcionario);