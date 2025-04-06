type Tarefa = {
    descricao : String;
    prioridade : number;
    concluida : boolean;
};

const tarefas : Tarefa [] = [
    { descricao : " Fazer relat ório", prioridade : 2, concluida : false } ,
    { descricao : " Enviar e- mail ", prioridade : 3 , concluida : false } ,
    { descricao : " Reunião com equipe ", prioridade : 1 , concluida : false }
    ];

function imprimirTarefa ( descricao : String , indice : number , totalTarefas : number ) : void {
    console.log(`Tarefa concluída : ${descricao}`);
    console.log (`Progresso : ${ indice + 1}/${totalTarefas}`);
}

function executarTarefas(tarefa : Tarefa[], callback:(descricao : String, indice : number, totalTarefas : number) => void, timer : number) : void{
    // const tarefasOrdenada : Tarefa[] = [];
    // for(let i=1; i<=3; i++){
    //     let listaPorPrioridade = tarefas.filter(tarefa => tarefa.prioridade == i);
    //     tarefasOrdenada.push(...listaPorPrioridade);
    // }
    tarefa.sort((a:Tarefa, b:Tarefa) => a.prioridade - b.prioridade);
    
    let i = 0;
    const interval = setInterval(() => {
        if(i >= tarefa.length || tarefa[i].descricao === "Cancelar"){
            clearInterval(interval);
            return;
        }
        
        console.log("processando tarefa concluida...")
        tarefa[i].concluida = true;
        callback(tarefa[i].descricao, i, tarefa.length);
        i++;
    }, timer);
}

executarTarefas( tarefas , imprimirTarefa , 1500) ;