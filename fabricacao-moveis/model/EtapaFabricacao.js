import {Ferramenta} from './Ferramenta.js';

export class EtapaFabricacao extends Ferramenta {

    #numero;
    #modeloMovel;
    #unidadesConcluidas = 0;

    constructor(codigo, nome, numero, modeloMovel) {
        super(codigo, nome);
        this.#numero = numero;
        this.#modeloMovel = modeloMovel;
        this.ferramentas = [];
    }

    get numero() {
        return this.#numero;
    }

    get modeloMovel() {
        return this.#modeloMovel;
    }

    get unidadesConcluidas() {
        return this.#unidadesConcluidas;
    }

    adicionarUnidades(quantidade) {
        if (quantidade > 0) {
            this.#unidadesConcluidas += quantidade;
            return true;
        }
        return false;
    }

    adicionarFerramenta(ferramenta) {
        this.ferramentas.push(ferramenta);
    }

    descreverEtapa() {
        return `Etapa ${this.#numero}: ${this.#modeloMovel} - Unidades concluídas: ${this.#unidadesConcluidas}`;
    }
}
