import View from "./view";

export default class MensagemView extends View<string> {
  template(model: string): string {
    return `
      <p class="alert">${model}</p>
    `;
  }
}
