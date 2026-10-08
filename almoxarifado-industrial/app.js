import {Material} from './model/Material.js';
import {Movimentacao} from './model/Movimentacao.js';
import {Entrada} from './model/Entrada.js';
import {Saida} from './model/Saida.js';
import {Transferencia} from './model/Transferencia.js';

const material = new Material('Material A', 100);

const movimentacao = new Movimentacao(1, 10);
movimentacao.associarMaterial(material);
const entrada = new Entrada('Fornecedor A');
console.log(entrada);
const saida = new Saida('Setor B');
console.log(saida);
const transferencia = new Transferencia('Setor C', 'Setor D');
console.log(transferencia);

const movimentacoes = [movimentacao, entrada, saida, transferencia];

for(let i = 0; i < movimentacoes.length; i++) {
    console.log(movimentacoes[i].descrever());
}