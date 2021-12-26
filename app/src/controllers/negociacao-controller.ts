import { DiasDaSemana } from "../enums/dias-da-semana.js";
import ListaNegociacoes from "../models/lista-negociacoes.js";
import Negociacao from "../models/negociacao.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";

export default class NegociacaoController {
  private inputData = document.querySelector("#data") as HTMLInputElement;
  private inputQuantidade = document.querySelector(
    "#quantidade"
  ) as HTMLInputElement;
  private inputValor = document.querySelector("#valor") as HTMLInputElement;

  private listaNegociacoes = new ListaNegociacoes();
  private negociacoesView = new NegociacoesView("#negociacoes-view");
  private mensagemView = new MensagemView("#mensagem-view");

  constructor() {
    this.negociacoesView.render(this.listaNegociacoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaNegociacao(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

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

  private limpaFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
  }
}
