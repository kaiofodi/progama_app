import {Ferramenta} from '../model/Ferramenta.js';
import {cadastrar, listar, atualizar, deletar, buscarPorId} from '../repository/ferramentaRepository.js';

export function cadastrarFerramenta(codigo, nome) {
    const ferramenta = new Ferramenta(codigo, nome);

    cadastrar(ferramenta);
}

export function listarFerramentas() {
    const lista = listar();

    console.log(lista)
}

export function atualizarFerramenta(indice, codigo, nome) {
    const ferramenta = new Ferramenta(codigo, nome);

    atualizar(indice, ferramenta);
}

export function deletarFerramenta(indice) {
    deletar(indice);
}

export function buscarFerramentaPorId(indice) {
    buscarPorId(indice);

}