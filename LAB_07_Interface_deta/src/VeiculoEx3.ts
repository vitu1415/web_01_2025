interface veiculo{
    marca: string;
    modelo: string;
    ligar(): void;
}

class Carro implements veiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }

    ligar(): void{
        console.log("Ligado");
    }
}

const carroVitor = new Carro("Fiat", "fastBack");
carroVitor.ligar();