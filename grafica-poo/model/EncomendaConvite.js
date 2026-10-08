import {Encomenda} from "./Encomenda.js";


export class EncomendaConvite extends Encomenda {

    #nomeEvento;

    constructor(descricao,quantidade,nomeEvento){
        super(descricao,quantidade);
        this.#nomeEvento = nomeEvento;
    }

    get getNomeEvento(){
        return this.#nomeEvento;
    }

    produzir(){
        console.log(`Foram produzidas ${this.getquantidade()} de convites para o evento ${this.getNomeEvento}.`);
    }
} 