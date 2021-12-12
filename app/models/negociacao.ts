export default class Negociacao {
  constructor(
    private _data: Date,
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
