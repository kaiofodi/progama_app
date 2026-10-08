export class Alerta {
    
    #mensagem;
    #prioridade;

    constructor(mensagem, prioridade){
        this.#mensagem = mensagem;
        this.#prioridade = prioridade;
    }

    getMensagem() {
        return this.#mensagem;
    }

    getPrioridade() {
        return this.#prioridade;
    }

    alterarPrioridade(novaPrioridade) {
        if(novaPrioridade === 'Baixa' || novaPrioridade === 'Media' || novaPrioridade === 'Alta'){
            this.#prioridade = novaPrioridade;

            return true
        }

        return false
    }

    enviar() {
        throw new Error('O metodo nao foi implementado na classe filha.')
    }
}