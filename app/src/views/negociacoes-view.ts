import escapa from "../decorators/escapa.js";
import ListaNegociacoes from "../models/lista-negociacoes.js";
import View from "./view.js";

export default class NegociacoesView extends View<ListaNegociacoes> {
  // Decorators servem para alterar o comportamento de uma função através da substituição desta por uma nova função que utiliza a original dentro dela, abrindo espaço para adicionar novos comportamentos
  @escapa
  protected template(model: ListaNegociacoes): string {
    return `
    <table class="table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Quantidade</th>
          <th>Valor</th>
          <th>Volume</th>
        </tr>
      </thead>
      <tbody>
        ${model.lista
          .map((negociacao) => {
            return `
            <tr>
              <td>${negociacao.data.toLocaleDateString()}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
            </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
    `;
  }
}
