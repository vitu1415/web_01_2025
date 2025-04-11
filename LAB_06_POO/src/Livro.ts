export class Livro{
    titulo: string
    autor: string
    anoPublicado: number
    editora: string

    constructor(titulo: string, autor: string, anoPublicado: number, editora: string){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicado = anoPublicado
        this.editora = editora
    }
    
    exibirDados(): void{
        console.log(`Titulo: ${this.titulo}\nautor: ${this.autor}\nAno Publicado: ${this.anoPublicado}\nEditora: ${this.editora}`)
    }
}
