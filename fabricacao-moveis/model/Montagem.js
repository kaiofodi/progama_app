import {Ferramenta} from './Ferramenta.js';

export class Montagem extends Ferramenta {

    #tipoMontagem;

    constructor(tipoMontagem) {
        super(tipoMontagem);
        this.#tipoMontagem = tipoMontagem;
    }

    get tipoMontagem() {
        return this.#tipoMontagem;
    }

    descreverEtapa() {
        return `Montagem - Tipo de montagem: ${this.#tipoMontagem}`;
    }

}