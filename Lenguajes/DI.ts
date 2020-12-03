class Servicio {}

class Componente{
    srv: Servicio
    constructor(srv: Servicio) {
        this.srv = srv;
    }
}

const c1 = new Componente(new Servicio())