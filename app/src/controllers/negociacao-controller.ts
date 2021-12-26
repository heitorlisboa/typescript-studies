import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import ListaNegociacoes from "../models/lista-negociacoes.js";
import NegociacoesView from "../views/negociacoes-view.js";
import MensagemView from "../views/mensagem-view.js";
import domInjector from "../decorators/dom-injector.js";
import NegociacaoDoDia from "../interfaces/negociacao-do-dia.js";

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

  public importaDados(): void {
    fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((listaDados: NegociacaoDoDia[]) => {
        return listaDados.map((dado) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      })
      .then((negociacoesDeHoje) => {
        for (let negociacao of negociacoesDeHoje) {
          this.listaNegociacoes.adiciona(negociacao);

          this.atualizaView()
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
