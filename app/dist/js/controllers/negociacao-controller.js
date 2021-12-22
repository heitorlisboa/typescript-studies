import { DiasDaSemana } from "../enums/dias-da-semana.js";
import ListaNegociacoes from "../models/lista-negociacoes.js";
import Negociacao from "../models/negociacao.js";
import MensagemView from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";
export default class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.listaNegociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoes-view");
        this.mensagemView = new MensagemView("#mensagem-view");
        this.negociacoesView.render(this.listaNegociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.render("Apenas negociações em dias úteis são aceitas!", true);
            return;
        }
        this.listaNegociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }
    ehDiaUtil(data) {
        const dataNegociacao = data.getDay();
        return (dataNegociacao > DiasDaSemana.DOMINGO &&
            dataNegociacao < DiasDaSemana.SABADO);
    }
    atualizaView() {
        this.negociacoesView.render(this.listaNegociacoes);
        this.mensagemView.render("Negociação adicionada com sucesso!");
    }
    limpaFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
    }
}
