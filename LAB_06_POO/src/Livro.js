"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicado, editora) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
        this.editora = editora;
    }
    Livro.prototype.exibirDados = function () {
        console.log("Titulo: ".concat(this.titulo, "\nautor: ").concat(this.autor, "\nAno Publicado: ").concat(this.anoPublicado, "\nEditora: ").concat(this.editora));
    };
    return Livro;
}());
exports.Livro = Livro;
