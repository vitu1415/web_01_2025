function criarAnimal(a) {
    return "O animal " + a.nome + " e tipo " + a.tipo;
}
var animal1 = {
    nome: "tartaruga",
    tipo: "repitil"
};
console.log(criarAnimal(animal1));
