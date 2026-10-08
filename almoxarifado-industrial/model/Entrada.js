import {Material} from './Material.js';

export class Entrada extends Material {

    #fornecedor;

    constructor(fornecedor) {
        super(fornecedor);
        this.#fornecedor = fornecedor;
    }

    get getFornecedor() {
        return this.#fornecedor;
    }

    descrever() {
        return `Entrada - Fornecedor: ${this.getFornecedor}`;
    }
}