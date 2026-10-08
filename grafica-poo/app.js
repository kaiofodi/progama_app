import {EncomendaCartaz} from "./model/EncomendaCartaz.js";
import {EncomendaConvite} from "./model/EncomendaConvite.js";
import {EncomendaEtiqueta} from "./model/EncomendaEtiqueta.js";

const cartaz = new EncomendaCartaz("Cartaz", "100", "50x66");
const convite = new EncomendaConvite("90", "casamento");
const etiqueta = new EncomendaEtiqueta("5", "carregador");

cartaz.adicionarUnidades("20");

const encomendas = [cartaz, convite, etiqueta];

for(let i = 0; i < encomendas.length; i++){
    const encomenda = encomendas[i];

    encomenda.produzir();
}