export class Encomenda {

    #descricao;
    #quantidade;

    constructor(descricao, quantidade){
        this.#descricao = descricao;
        this.#quantidade = quantidade;
    }

    getDescricao(){
        return this.#descricao;
    }

    getquantidade(){
        return this.#quantidade;
    }

    adicionarUnidades(unidades){
        if(unidades >= 0){
            this.#quantidade += unidades;
            return true
        }
        
        return false;
    }

    produzir(){
        console.log('O metodo nao foi implementado na classe filha');
        
    }
}