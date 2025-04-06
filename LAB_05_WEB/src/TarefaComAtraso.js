var tarefas = [
    { descricao: " Fazer relat ório", prioridade: 2, concluida: false },
    { descricao: " Enviar e- mail ", prioridade: 3, concluida: false },
    { descricao: " Reunião com equipe ", prioridade: 1, concluida: false }
];
function imprimirTarefa(descricao, indice, totalTarefas) {
    console.log("Tarefa conclu\u00EDda : ".concat(descricao));
    console.log("Progresso : ".concat(indice + 1, "/").concat(totalTarefas));
}
function executarTarefas(tarefa, callback, timer) {
    // const tarefasOrdenada : Tarefa[] = [];
    // for(let i=1; i<=3; i++){
    //     let listaPorPrioridade = tarefas.filter(tarefa => tarefa.prioridade == i);
    //     tarefasOrdenada.push(...listaPorPrioridade);
    // }
    tarefa.sort(function (a, b) { return a.prioridade - b.prioridade; });
    var i = 0;
    var interval = setInterval(function () {
        if (i >= tarefa.length || tarefa[i].descricao === "Cancelar") {
            clearInterval(interval);
            return;
        }
        console.log("processando tarefa concluida...");
        tarefa[i].concluida = true;
        callback(tarefa[i].descricao, i, tarefa.length);
        i++;
    }, timer);
}
executarTarefas(tarefas, imprimirTarefa, 1500);
