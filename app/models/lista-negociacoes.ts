import Negociacao from "./negociacao.js";

export default class ListaNegociacoes {
  // private faz com que essa propriedade não possa ser acessada fora da classe
  private _lista: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void {
    this._lista.push(negociacao);
  }

  get lista(): readonly Negociacao[] {
    return [...this._lista];
  }
}
