import { PagamentoCartao } from "./model/PagamentoCartao.js";
import { PagamentoPix } from "./model/PagamentoPix.js";
import { PagamentoBoleto } from "./model/PagamentoBoleto.js";

const pix = new PagamentoPix(1000, "123456789");

const cartao = new PagamentoCartao(500, "1234", 3);

const boleto = new PagamentoBoleto(250, "123456789");

pix.aplicarDesconto(10);

const pagamentos = [pix, cartao, boleto];

console.log("Pagamentos criados")

for(let i = 0; i < pagamentos.length; i++){
    pagamentos[i].processarPag();
}

console.log("Pagamentos processados");
