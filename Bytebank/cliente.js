//moude dados do correntista
export class Cliente{ //aqui aon invés de variável colocaremos atributos
    nome;
    _cpf;
    //comprovanteEndereço;
    //holerite;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}