import {Ferramenta} from './Ferramenta.js';

export class Corte extends Ferramenta {

    #tipoCorte;

    constructor(tipoCorte){
        super(tipoCorte);
        this.#tipoCorte = tipoCorte;
    }

    get tipoCorte() {
        return this.#tipoCorte;
    }

    descreverEtapa() {
        return `Corte - Tipo de corte: ${this.#tipoCorte}`;
    }
}