import {Inspecao} from "./Inspecao.js";

export class InspecaoDimensional extends Inspecao {
    
    #diametro;

    constructor(codigo, lote, diametro){
        super(codigo, lote);
        this.#diametro = diametro;
    }

    get getdiametro(){
        return this.#diametro;
    }

    descreverVerificacao(){
        return `Inspeção Dimensional - Código: ${this.getCodigo}, Lote: ${this.getLote}, Diâmetro: ${this.getdiametro}, Quantidade Verificada: ${this.getQuantidadeVerificada}`;
    }
}