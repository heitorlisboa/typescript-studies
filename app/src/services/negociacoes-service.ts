import Negociacao from "../models/negociacao.js";
import NegociacaoDoDia from "../interfaces/negociacao-do-dia.js";

export default class NegociacoesService {
  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((listaDados: NegociacaoDoDia[]) => {
        return listaDados.map((dado) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      });
  }
}
