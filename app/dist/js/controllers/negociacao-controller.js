var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import logaTempoExecucao from "../decorators/loga-tempo-execucao.js";
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
__decorate([
    logaTempoExecucao()
], NegociacaoController.prototype, "adiciona", null);
