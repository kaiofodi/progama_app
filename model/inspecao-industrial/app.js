import {Inspetor} from './model/Inspetor.js';
import {InspecaoVisual} from './model/InspecaoVisual.js';
import {InspecaoDimensional} from './model/InspecaoDimensional.js';
import {InspecaoFuncional} from './model/InspecaoFuncional.js';

const inspetor = new Inspetor('Paulo', '12345');
const inspetor2 = new Inspetor('Maria', '67890');

const inspecaoVisual = new InspecaoVisual('IV001', 'L001', 'Bom');
inspecaoVisual.adicionarPecas(3);
const descricaoVisual = inspecaoVisual.descreverVerificacao();
console.log(descricaoVisual);
inspecaoVisual.atribuirInspetor(inspetor);
const inspecaoDimensional = new InspecaoDimensional('ID001', 'L002', 5.5);
inspecaoDimensional.adicionarPecas(15);
const descricaoDimensional = inspecaoDimensional.descreverVerificacao();
console.log(descricaoDimensional);
inspecaoDimensional.atribuirInspetor(inspetor2);

const inspecaoFuncional = new InspecaoFuncional('IF001', 'L003', 'Aceito');
inspecaoFuncional.adicionarPecas(20);
const descricaoFuncional = inspecaoFuncional.descreverVerificacao();
console.log(descricaoFuncional);
inspecaoFuncional.atribuirInspetor(inspetor);

const inspecoes = [inspecaoVisual, inspecaoDimensional, inspecaoFuncional];

for (let i = 0; i < inspecoes.length; i++) {
    console.log(inspecoes[i].descreverVerificacao());

    console.log(`Inspetor: ${inspecoes[i].inspetor.getNome}, 
    Matrícula: ${inspecoes[i].inspetor.getMatricula}`);
}