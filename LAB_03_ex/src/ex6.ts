type Evento = {
    nome : string ;
    mes : string ;
};
    
const eventos : Evento [] = [
    { nome : " Workshop TypeScript ", mes : " Janeiro " } ,
    { nome : " Hackathon ", mes : " Março" } ,
    { nome : " Confer ê ncia de IA", mes : " Janeiro " }
];

const mesDesejado : string = " Janeiro ";

let eventoEmJaneiro = eventos.filter(evento => evento.mes == mesDesejado);

console.log(eventoEmJaneiro);