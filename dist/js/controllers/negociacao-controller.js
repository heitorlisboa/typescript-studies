import ListaNegociacoes from "../models/lista-negociacoes.js";
import Negociacao from "../models/negociacao.js";
export default class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new ListaNegociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.listaNegociacoes.adiciona(negociacao);
        console.log(this.listaNegociacoes.lista);
        this.limpaFormulario();
    }
    criaNegociacao() {
        const regex = /-/g;
        const data = new Date(this.inputData.value.replace(regex, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limpaFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
    }
}
