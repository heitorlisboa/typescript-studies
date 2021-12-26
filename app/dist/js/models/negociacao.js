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
    static criaNegociacao(dataString, quantidadeString, valorString) {
        const regex = /-/g;
        const data = new Date(dataString.replace(regex, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
    paraTexto() {
        return `Data: ${this.data}
Quantidade: ${this.quantidade}
Valor: ${this.valor}
Volume: ${this.volume}`;
    }
    ehIgual(negociacao) {
        return (this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear() &&
            this.quantidade === negociacao.quantidade &&
            this.valor === negociacao.valor);
    }
}
