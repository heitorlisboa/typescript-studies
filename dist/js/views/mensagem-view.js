import View from "./view.js";
export default class MensagemView extends View {
    template(model) {
        return `
      <p class="alert">${model}</p>
    `;
    }
}
