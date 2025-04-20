var livro = /** @class */ (function () {
    function livro(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    livro.prototype.imprimir = function () {
        console.log("titulo: " + this.titulo + "\nautor: " + this.autor + "\nano: " + this.ano);
    };
    return livro;
}());
var livroVitor = new livro("teste1", "Vitor", 2025);
livroVitor.imprimir();
