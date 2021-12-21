export default class Negociacao {
  constructor(
    private _data: Date,
    // readonly faz com que a propriedade só possa ser lida mas não ter nenhum valor atribuido porém ainda é possível utilizar seus métodos, por isso a variável data não é declarada como readonly mas sim como private, sendo depois criado um getter que retorna uma cópia
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const copia = new Date(this._data.getTime());

    return copia;
  }

  get volume(): number {
    return this.valor * this.quantidade;
  }
}
