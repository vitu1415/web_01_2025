import { Fabricante } from "./Fabricante";

export class Produto {
    id: number;
    nome: String;
    preco: number;
    fabricante: Fabricante;

    constructor(id: number, nome: String, preco: number, fabricante: Fabricante){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
    }
}