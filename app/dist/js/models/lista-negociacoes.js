export default class ListaNegociacoes {
    constructor() {
        this._lista = [];
    }
    get lista() {
        return [...this._lista];
    }
    adiciona(negociacao) {
        this._lista.push(negociacao);
    }
    paraTexto() {
        return JSON.stringify(this.lista, null, 2);
    }
}
