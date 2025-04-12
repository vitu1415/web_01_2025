export class DateUtils{
    static formatarData(data: Date, formato: string): string{
        const dia = String(data.getDate());
        const mes = String(data.getMonth() + 1);
        const ano = data.getFullYear();

        switch (formato) {
        case 'dd/mm/yyyy':
            return `${dia}/${mes}/${ano}`;
        case 'yyyy-mm-dd':
            return `${ano}-${mes}-${dia}`;
        default:
            return 'Formato de data não suportado';
        }
    
    }
    
    static diferencaEmDias(data1: Date, data2: Date): number{
        let difData: number = 0;
        const porDia = 1000 * 60 * 60 * 24;
        if(data1 > data2){
            difData = data1.getTime() - data2.getTime();
            return Math.floor(difData/porDia);
        } else if(data1 < data2){
            difData = data2.getTime() - data1.getTime();
            return Math.floor(difData/porDia);
        } else{
            console.log("Data sao equivalentes");
            return difData;
        }
    }

    static adicionarDias(data: Date, dias: number): Date{
        const dataNova = new Date(data);
        dataNova.setDate(data.getDate() + dias);
        return dataNova
    }

    static ehFinalDeSemana(data: Date): boolean{
        const diaSemana = data.getDay();
        if(diaSemana === 0 || diaSemana === 6){
            return true;
        } else{
            return false;
        }
    }

    static converterParaISO(data: Date): string{
        return data.toISOString();
    }
}