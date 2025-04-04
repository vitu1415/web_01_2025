function maiuscula(palavra : string) : void{
    console.log(palavra.toUpperCase());
}

const maiuscula2 = (palavra : string) : void => console.log(palavra.toUpperCase()); 

let Palavra : string = "teste";

maiuscula(Palavra);
maiuscula2(Palavra);