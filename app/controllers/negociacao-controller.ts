import { DiasDaSemana } from "../enums/dias-da-semana.js";
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

  public adiciona(): void {
    const negociacao = this.criaNegociacao();

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.render(
        "Apenas negociações em dias úteis são aceitas!",
        true
      );
      return;
    }

    this.listaNegociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limpaFormulario();
  }

  private ehDiaUtil(data: Date): boolean {
    const dataNegociacao = data.getDay();

    return (
      dataNegociacao > DiasDaSemana.DOMINGO &&
      dataNegociacao < DiasDaSemana.SABADO
    );
  }

  private atualizaView(): void {
    this.negociacoesView.render(this.listaNegociacoes);
    this.mensagemView.render("Negociação adicionada com sucesso!");
  }

  private criaNegociacao(): Negociacao {
    const regex = /-/g;
    const data = new Date(this.inputData.value.replace(regex, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(data, quantidade, valor);
  }

  private limpaFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
  }
}
