export default class ListaNegociacoes {
    constructor() {
        // private faz com que essa propriedade não possa ser acessada fora da classe
        this._lista = [];
    }
    adiciona(negociacao) {
        this._lista.push(negociacao);
    }
    get lista() {
        return [...this._lista];
    }
}
