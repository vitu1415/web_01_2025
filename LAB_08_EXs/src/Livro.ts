interface Livro{
    titulo: string,
    autor: string,
    ano: number
}

class livro implements livro{
    titulo: string;
    autor: string;
    ano: number;

    constructor(titulo: string, autor: string, ano: number){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    imprimir() : void{
        console.log("titulo: "+this.titulo+"\nautor: "+this.autor+"\nano: "+this.ano);
    }
}

const livroVitor = new livro("teste1", "Vitor", 2025);

livroVitor.imprimir();