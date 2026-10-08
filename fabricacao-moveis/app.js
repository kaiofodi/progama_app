import {Ferramenta} from './model/Ferramenta.js';
import {EtapaFabricacao} from './model/EtapaFabricacao.js';
import {Acabamento} from './model/Acabamento.js';
import {Corte} from './model/Corte.js';
import {Montagem} from './model/Montagem.js';

const ferramenta = new Ferramenta('001', 'Ferramenta A');
const trena = new Ferramenta('Trena');
const serra = new Ferramenta('Serra');
const etapaFabricacao = new EtapaFabricacao('001', 'Etapa 1', 1, 'Modelo A');
etapaFabricacao.adicionarFerramenta(ferramenta);
etapaFabricacao.adicionarFerramenta(trena);
etapaFabricacao.adicionarFerramenta(serra);

const acabamento = new Acabamento('Acabamento B');
const corte = new Corte('Corte C');
etapaFabricacao.adicionarUnidades(1);
const montagem = new Montagem('Montagem movel'); 
etapaFabricacao.adicionarFerramenta(trena);
etapaFabricacao.adicionarFerramenta(serra);


const etapas = [etapaFabricacao, acabamento, corte, montagem];

for(let i = 0; i < etapas.length; i++) {
    console.log(etapas[i].descreverEtapa());
}
