import {Material} from './Material.js';

export class Movimentacao extends Material {

    #numero;
    #quantidade;

    constructor(numero, quantidade) {
        super(numero, quantidade);
        this.#numero = numero;
        this.#quantidade = quantidade;
    }

    get getNumero() {
        return this.#numero;
    }

    get getQuantidade() {
        return this.#quantidade;
    }

    descrever() {
        return `Movimentação - Número: ${this.getNumero}, Quantidade: ${this.getQuantidade}`;
    }

    associarMaterial(material) {
        if (material instanceof Material) {
            this.material = material;
            return true;
        }
        return false;
    }
}