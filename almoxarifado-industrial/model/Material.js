export class Material {

    #nome;
    #matricula;
    #quantidade = 0;

    constructor(nome, matricula) {
        this.#nome = nome;
        this.#matricula = matricula;
    }

    get getNome() {
        return this.#nome;
    }

    get getMatricula() {
        return this.#matricula;
    }
    get getQuantidade() {
        return this.#quantidade;
    }

    adicionarUnidade(valor) {
        if (valor > 0) {
            this.#quantidade += valor;
            return true;
        }
        return false;
    }

    descrever() {
        return `Material - Nome: ${this.getNome}, Matrícula: ${this.getMatricula}, Quantidade: ${this.getQuantidade}`;
    }
}