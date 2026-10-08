import {Inspecao} from './Inspecao.js';

export class InspecaoFuncional extends Inspecao {
    
    #aceitamento;

    constructor(codigo, lote, aceitamento){
        super(codigo, lote);
        this.#aceitamento = aceitamento;
    }

    get getAceitamento(){
        return this.#aceitamento;
    }

    descreverVerificacao(){
        return `Inspeção Funcional - Código: ${this.getCodigo}, Lote: ${this.getLote}, Aceitamento: ${this.getAceitamento}, Quantidade Verificada: ${this.getQuantidadeVerificada}`;
    }
}