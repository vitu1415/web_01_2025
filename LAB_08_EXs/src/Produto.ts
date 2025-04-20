interface Produto{
    id: number,
    nome: string,
    preco: number
}

class produto implements Produto{
    id: number;
    nome: string;
    preco: number;

    constructor(id: number, nome: string, preco: number){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    
    imprimir(): void{
        console.log("id: "+this.id+"\nnome: "+this.nome+"\npreco: "+this.preco);
    }
}