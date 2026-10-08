const etapaFabricacoes = [];

export function cadastrar(etapaFabricacao) {
    etapaFabricacoes.push(etapaFabricacao);
}

export function lista() {
    return etapaFabricacoes;
}

export function atualizar(indice, etapaFabricacao) {
    etapaFabricacoes[indice] = etapaFabricacao;
}

export function deletar(indice) {
    etapaFabricacoes.splice(indice, 1);
}

export function buscarPorId(indice) {
    return etapaFabricacoes[indice];
}