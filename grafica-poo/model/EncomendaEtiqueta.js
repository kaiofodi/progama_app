import {Encomenda} from "./Encomenda.js";

export class EncomendaEtiqueta extends Encomenda {

    #nomeProduto

    constructor(descricao,quantidade,nomeProduto){
        super(descricao,quantidade);
        this.#nomeProduto = nomeProduto;
    }

    get getNomeProduto(){
        return this.#nomeProduto;
    
    }

    produzir(){
        console.log(`Foram produzidas ${this.getquantidade()} para o ${this.getNomeProduto}.`);
        
    }
}