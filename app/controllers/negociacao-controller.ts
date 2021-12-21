import ListaNegociacoes from "../models/lista-negociacoes.js";
import Negociacao from "../models/negociacao.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";

export default class NegociacaoController {
  private inputData: HTMLInputElement = document.querySelector("#data");
  private inputQuantidade: HTMLInputElement =
    document.querySelector("#quantidade");
  private inputValor: HTMLInputElement = document.querySelector("#valor");
  private listaNegociacoes = new ListaNegociacoes();
  private negociacoesView = new NegociacoesView("#negociacoes-view");
  private mensagemView = new MensagemView("#mensagem-view");

  constructor() {
    this.negociacoesView.render(this.listaNegociacoes);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.listaNegociacoes.adiciona(negociacao);

    // Renderiza as informações adicionadas
    this.negociacoesView.render(this.listaNegociacoes);
    this.mensagemView.render("Negociação adicionada com sucesso!");
    this.limpaFormulario();
  }

  criaNegociacao(): Negociacao {
    const regex = /-/g;
    const data = new Date(this.inputData.value.replace(regex, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(data, quantidade, valor);
  }

  limpaFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
  }
}
