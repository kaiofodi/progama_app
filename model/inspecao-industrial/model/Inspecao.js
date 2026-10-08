export class Inspecao {
    
    #codigo;
    #lote;
    #quantidadeVerificada;

    constructor(codigo, lote){
        this.#codigo = codigo;
        this.#lote = lote;
        this.#quantidadeVerificada = 0;
    }

    get getCodigo(){
        return this.#codigo;
    }

    get getLote(){
        return this.#lote;
    }

    get getQuantidadeVerificada(){
        return this.#quantidadeVerificada;
    }

    adicionarPecas(quantidade){
        if(quantidade > 0){
        this.#quantidadeVerificada += quantidade;
        return true;
        }
        return false;
    }

    atribuirInspetor(inspetor){
            this.inspetor = inspetor;
        }
}

