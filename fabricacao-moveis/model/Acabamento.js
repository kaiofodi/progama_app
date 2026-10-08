import {Ferramenta} from './Ferramenta.js';

export class Acabamento extends Ferramenta {

    #tipoAcabamento;

    constructor(tipoAcabamento) {
        super(tipoAcabamento);
        this.#tipoAcabamento = tipoAcabamento;
    }

    get tipoAcabamento() {
        return this.#tipoAcabamento;
    }

    descreverEtapa() {
        return `Acabamento - Tipo de acabamento: ${this.#tipoAcabamento}`;
    }
}