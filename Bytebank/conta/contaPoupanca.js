import {Conta} from "./conta.js";

export class ContaPoupanca extends Conta {
    constructor(saladoInicial, cliente, agencia) {
        super(saladoInicial, cliente, agencia);
    }

    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}