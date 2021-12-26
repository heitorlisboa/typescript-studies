var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import ListaNegociacoes from "../models/lista-negociacoes.js";
import NegociacoesView from "../views/negociacoes-view.js";
import MensagemView from "../views/mensagem-view.js";
import domInjector from "../decorators/dom-injector.js";
import NegociacoesService from "../services/negociacoes-service.js";
import imprime from "../utils/imprime.js";
export default class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoes-view");
        this.mensagemView = new MensagemView("#mensagem-view");
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.render(this.listaNegociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.render("Apenas negociações em dias úteis são aceitas!", true);
            return;
        }
        this.listaNegociacoes.adiciona(negociacao);
        imprime(negociacao, this.listaNegociacoes);
        this.atualizaView();
        this.limpaFormulario();
    }
    importaDados() {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then((negociacoesDeHoje) => {
            for (let negociacao of negociacoesDeHoje) {
                this.listaNegociacoes.adiciona(negociacao);
                this.atualizaView();
            }
        });
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
    domInjector("#data")
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
