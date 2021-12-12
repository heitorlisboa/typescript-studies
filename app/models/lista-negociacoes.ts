import Negociacao from "./negociacao";

export default class ListaNegociacoes {
  private _lista: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this._lista.push(negociacao);
  }

  get lista(): readonly Negociacao[] {
    return [...this._lista];
  }
}
