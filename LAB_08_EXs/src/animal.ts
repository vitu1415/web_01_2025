interface Animal {
    nome : string ;
    tipo : string ;
}

function criarAnimal ( a : Animal ) : string {
    return "O animal " + a.nome+" e tipo "+a.tipo;
}

const animal1: Animal ={
    nome: "tartaruga", 
    tipo: "repitil"
}

console.log(criarAnimal(animal1));