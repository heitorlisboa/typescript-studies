export default class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const copia = new Date(this._data.getTime());
        return copia;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
}
