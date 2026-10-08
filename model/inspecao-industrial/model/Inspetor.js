export class Inspetor {
    #nome;
    #matricula;


    constructor(nome, matricula){
        this.#nome = nome;
        this.#matricula = matricula;

    }

    get getNome(){
        return this.#nome;
    }

    get getMatricula(){
        return this.#matricula;
    }
}