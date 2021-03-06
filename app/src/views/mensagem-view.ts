import View from "./view.js";

export default class MensagemView extends View<string> {
  protected template(model: string, error: boolean = false): string {
    let classeAdicional: string = "";
    if (error) {
      classeAdicional = "alert-error";
    }
    return `
      <p class="alert ${classeAdicional}">${model}</p>
    `;
  }
}
