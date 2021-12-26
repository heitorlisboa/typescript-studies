import Modelo from "../interfaces/modelo.js";
import Negociacao from "./negociacao.js";

export default class ListaNegociacoes implements Modelo<ListaNegociacoes> {
  // private faz com que essa propriedade não possa ser acessada fora da classe
  private _lista: Negociacao[] = [];

  get lista(): readonly Negociacao[] {
    return [...this._lista];
  }

  public adiciona(negociacao: Negociacao): void {
    this._lista.push(negociacao);
  }

  public paraTexto(): string {
    return JSON.stringify(this.lista, null, 2);
  }

  public ehIgual(negociacoes: ListaNegociacoes): boolean {
    return JSON.stringify(this.lista) === JSON.stringify(negociacoes.lista)
  }
}
