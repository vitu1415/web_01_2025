import { Endereco } from "./Endereco";

export class Fabricante{
    nome: String;
    endereco: Endereco

    constructor(nome: String, endereco: Endereco){
        this.nome = nome;
        this.endereco = endereco;
    }
}