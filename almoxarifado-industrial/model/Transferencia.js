import {Material} from "./Material.js";

export class Transferencia extends Material {

    #setorOrigem;
    #setorDestino;

    constructor(setorOrigem, setorDestino) {
        super();
        this.#setorOrigem = setorOrigem;
        this.#setorDestino = setorDestino;
    }

    get getSetorOrigem() {
        return this.#setorOrigem;
    }

    get getSetorDestino() {
        return this.#setorDestino;
    }

    descrever() {
        return `Transferência - Setor Origem: ${this.getSetorOrigem} | Setor Destino: ${this.getSetorDestino}`;
    }
}
