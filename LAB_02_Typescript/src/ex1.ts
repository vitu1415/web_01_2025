let idade : number[] = [10, 15, 20, 8, 17, 25];

for(let i = 0; i < idade.length; i++){
    if(idade[i] < 12){
        console.log("crianca");
    }else if(idade[i] < 18){
        console.log("Adolescente");
    } else{
        console.log("Adulto");
    }
}