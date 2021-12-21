export default class Negociacao {
    constructor(_data, 
    // readonly faz com que a propriedade só possa ser lida mas não ter nenhum valor atribuido porém ainda é possível utilizar seus métodos, por isso a variável data não é declarada como readonly mas sim como private, sendo depois criado um getter que retorna uma cópia
    quantidade, valor) {
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
