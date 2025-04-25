var Exercicio = /** @class */ (function () {
    function Exercicio() {
    }
    Exercicio.contarOcorrencias = function (frase, palavra) {
        var contador = 0;
        var fraseMinuscula = frase.toLowerCase();
        var palavraMinuscula = palavra.toLowerCase();
        for (var i = 0; i < frase.length; i++) {
            if (fraseMinuscula.substring(i, i + palavraMinuscula.length) === palavraMinuscula) {
                contador++;
            }
        }
        return contador;
    };
    Exercicio.primeirasLetras = function (frase) {
        var listPalavras = frase.split(" ");
        for (var i = 0; i < listPalavras.length; i++) {
            console.log(listPalavras[i].substring(0, 1));
        }
    };
    Exercicio.removerVogais = function (frase) {
        var vogais = "aeiouAEIOU";
        var nova_frase = "";
        for (var i = 0; i < frase.length; i++) {
            if (vogais.indexOf(frase[i]) === -1) {
                nova_frase += frase[i];
            }
        }
        return nova_frase;
    };
    return Exercicio;
}());
console.log(Exercicio.contarOcorrencias("banana", "na")); // 2
console.log(Exercicio.primeirasLetras("JavaScript TypeScript ")); //"J T"
console.log(Exercicio.removerVogais("Hello World")); //"Hll Wrld "
