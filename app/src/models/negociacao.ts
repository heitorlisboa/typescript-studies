import Modelo from "../interfaces/modelo.js";

export default class Negociacao implements Modelo<Negociacao> {
  // Utilizar as próprias declarações (com public/private/protected) dentro dos parâmetros faz com que o typescript compile o código tanto recebendo os parâmetros como já declarando as propriedades
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

  public static criaNegociacao(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    const regex = /-/g;
    const data = new Date(dataString.replace(regex, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    return new Negociacao(data, quantidade, valor);
  }

  public paraTexto(): string {
    return `Data: ${this.data}
Quantidade: ${this.quantidade}
Valor: ${this.valor}
Volume: ${this.volume}`;
  }

  public ehIgual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear() &&
      this.quantidade === negociacao.quantidade &&
      this.valor === negociacao.valor
    );
  }
}
