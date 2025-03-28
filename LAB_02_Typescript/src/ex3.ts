let listaMista : (number | String)[] =  [1, "Maçã", 2, "Banana", 3, "Laranja"];

let num : number[] = [];
let frutas : String[] = [];

for(let i = 0; i<listaMista.length; i++){
    if(typeof listaMista[i] === 'number'){
        num.push(listaMista[i] as number);
    }
    else{
        frutas.push(listaMista[i] as String);
    }
}

console.log(num);
console.log(frutas);