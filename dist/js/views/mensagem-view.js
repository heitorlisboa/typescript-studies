import View from "./view";
export default class MensagemView extends View {
    template(model) {
        return `
      <p class="alert">${model}</p>
    `;
    }
}
