function dobraNumero(lista1 : number[], lista2 : number[]):void{
    for(let i=0; i<lista1.length; i++){
        lista2.push(lista1[i]*2);
    }
    console.log(lista1);
    console.log(lista2);
}

let listaNumeros:number[] = [2, 4, 8]
let listaNumerosDobrados:number[] = [];

dobraNumero(listaNumeros, listaNumerosDobrados)