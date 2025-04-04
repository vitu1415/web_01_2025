type Aluno = {
    nome : string ;
    nota : number ;
};

const alunos : Aluno [] = [
    { nome : " Alice ", nota : 8 } ,
    { nome : " Bruno ", nota : 5 } ,
    { nome : " Carla ", nota : 7 } ,
    { nome : " Daniel ", nota : 6 }
];

let alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);