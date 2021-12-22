import View from "./view.js";
export default class NegociacoesView extends View {
    template(model) {
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
