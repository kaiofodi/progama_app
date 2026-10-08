import {Inspecao} from './Inspecao.js';

export class InspecaoVisual extends Inspecao {
    
    #acabamento;

    constructor(codigo, lote, acabamento){
        super(codigo, lote);
        this.#acabamento = acabamento;
    }

    get getAcabamento(){
        return this.#acabamento;
    }

    descreverVerificacao(){
        return `Inspeção Visual - Código: ${this.getCodigo}, Lote: ${this.getLote}, Acabamento: ${this.getAcabamento}, Quantidade Verificada: ${this.getQuantidadeVerificada}`;
    }
}