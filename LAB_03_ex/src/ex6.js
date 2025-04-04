var eventos = [
    { nome: " Workshop TypeScript ", mes: " Janeiro " },
    { nome: " Hackathon ", mes: " Março" },
    { nome: " Confer ê ncia de IA", mes: " Janeiro " }
];
var mesDesejado = " Janeiro ";
var eventoEmJaneiro = eventos.filter(function (evento) { return evento.mes == mesDesejado; });
console.log(eventoEmJaneiro);
