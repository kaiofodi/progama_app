import {Material} from './Material.js';

export class Saida extends Material {

    #setorDestino;

    constructor(setorDestino) {
        super(setorDestino);
        this.#setorDestino = setorDestino;
    }

    get getSetorDestino() {
        return this.#setorDestino;
    }

    descrever() {
        return `Saida - Setor Destino: ${this.getSetorDestino}`;
    }
}
