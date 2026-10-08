import {Encomenda} from "./Encomenda.js";

export class EncomendaCartaz extends Encomenda {

    #tamanho;

    constructor(descricao,quantidade,tamanho){
        super(descricao,quantidade);
        this.#tamanho = tamanho;
    }

    get getTamanho(){
        return this.#tamanho;
    }

    produzir(){
        console.log(`Foram produzidas ${this.getquantidade()} cartazes com o tamanho de ${this.getTamanho}.`);
        
    }
}