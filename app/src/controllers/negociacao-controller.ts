import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import ListaNegociacoes from "../models/lista-negociacoes.js";
import NegociacoesView from "../views/negociacoes-view.js";
import MensagemView from "../views/mensagem-view.js";
import domInjector from "../decorators/dom-injector.js";
import NegociacoesService from "../services/negociacoes-service.js";
import imprime from "../utils/imprime.js";

export default class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;

  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;

  @domInjector("#valor")
  private inputValor: HTMLInputElement;

  private listaNegociacoes = new ListaNegociacoes();
  private negociacoesView = new NegociacoesView("#negociacoes-view");
  private mensagemView = new MensagemView("#mensagem-view");
  private negociacoesService = new NegociacoesService();

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
    imprime(negociacao, this.listaNegociacoes);
    this.atualizaView("Negociação adicionada com sucesso!");
    this.limpaFormulario();
  }

  public importaDados(): void {
    this.negociacoesService
      .obterNegociacoesDoDia()
      .then((negociacoesDeHoje) => {
        return negociacoesDeHoje.filter((negociacao) => {
          return !this.listaNegociacoes.lista.some((negociacaoRegistrada) =>
            negociacaoRegistrada.ehIgual(negociacao)
          );
        });
      })
      .then((negociacoesDeHoje) => {
        for (let negociacao of negociacoesDeHoje) {
          this.listaNegociacoes.adiciona(negociacao);
        }

        if (negociacoesDeHoje.length !== 0) {
          this.atualizaView("Negociações importadas com sucesso!");
        }
      });
  }

  private ehDiaUtil(data: Date): boolean {
    const dataNegociacao = data.getDay();

    return (
      dataNegociacao > DiasDaSemana.DOMINGO &&
      dataNegociacao < DiasDaSemana.SABADO
    );
  }

  private atualizaView(mensagem: string): void {
    this.negociacoesView.render(this.listaNegociacoes);
    this.mensagemView.render(mensagem);
  }

  private limpaFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
  }
}
