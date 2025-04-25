class Exercicio{

    static contarOcorrencias(frase: string, palavra: string): number {
        let contador = 0;
        const fraseMinuscula = frase.toLowerCase();
        const palavraMinuscula = palavra.toLowerCase();
        for (let i = 0; i < frase.length; i++) {
            if(fraseMinuscula.substring(i, i + palavraMinuscula.length) === palavraMinuscula){
                contador++;
            }
        }
        return contador;
    }

    static primeirasLetras(frase: string): void {
        const listPalavras = frase.split(" ");
        for(let i = 0; i < listPalavras.length; i++){
            console.log(listPalavras[i].substring(0, 1));
        }
    }

    static removerVogais(frase: string): string {
        const vogais = "aeiouAEIOU"
        let nova_frase = ""
        for(let i = 0; i < frase.length; i++){
            if(vogais.indexOf(frase[i]) === -1){
                nova_frase += frase[i]
            }
        }  
        return nova_frase;
    }
}

console.log(Exercicio.contarOcorrencias("banana", "na")); // 2
console.log(Exercicio.primeirasLetras("JavaScript TypeScript ")); //"J T"
console.log(Exercicio.removerVogais("Hello World")); //"Hll Wrld "