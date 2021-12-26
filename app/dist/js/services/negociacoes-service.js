import Negociacao from "../models/negociacao.js";
export default class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then((res) => res.json())
            .then((listaDados) => {
            return listaDados.map((dado) => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
