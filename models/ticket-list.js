const Ticket = require('./ticket');

class TicketList {
    constructor(){
        this.ultimoNumero=0;
        this.pendientes = [];
        this.asignados = [];
    }

    get siguientenumero(){
        this.ultimoNumero++;
        return this.ultimoNumero;
    }

    get ultimos13(){
        return this.asignados.slice(0,13);
    }

    crearTicket(numero){
        const nuevoTicket = new Ticket(this.siguientenumero);
        this.pendientes.push(nuevoTicket);
        return nuevoTicket;
    }

    asignarTicket(agente, escritorio){
        if(this.pendientes.length===0) {
            return null;
        };
        const siguienteTicket = this.pendientes.shift();
        siguienteTicket.agente = agente;
        siguienteTicket.escritorio = escritorio;
        this.asignados.unshift(siguienteTicket);
        return siguienteTicket;
    }
}

module.exports=TicketList;