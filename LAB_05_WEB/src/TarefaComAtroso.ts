type Tarefa = {
    descricao : String;
    prioridade : number;
    concluida : boolean;
};

const tarefas : Tarefa [] = [
    { descricao : " Fazer relat ório", prioridade : 2, concluida : false } ,
    { descricao : " Enviar e- mail ", prioridade : 3 , concluida : false } ,
    { descricao : " Reuni ão com equipe ", prioridade : 1 , concluida : false }
    ];

function imprimirTarefa ( descricao : string , indice : number , totalTarefas : number ) : void {
    console.log(Tarefa concluída : ${descricao});
    console.log (Progresso : ${ indice + 1}/${totalTarefas});
}

function executarTarefas(tarefa : Tarefa[], callback:(descricao : String, indice : number, totalTarefas : number) => void, totalTarefas : number) : void{

}

executarTarefas( tarefas , imprimirTarefa , 1500) ;