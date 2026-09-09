import { Pagamento } from "./pagamento.js";

export class PagamentoBoleto extends Pagamento{

    #codigoBarras;

    constructor(valor, codigoBarras){
        super(valor);
        this.#codigoBarras = codigoBarras;
    }

    get codigoBarras(){
        return this.#codigoBarras;
    }

    processarPag(){
        console.log(`Gerar boleto com codigo de barras ${this.#codigoBarras}`);
    }
}