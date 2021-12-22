import View from "./view.js";
export default class MensagemView extends View {
    template(model, error = false) {
        let classeAdicional = "";
        if (error) {
            classeAdicional = "alert-error";
        }
        return `
      <p class="alert ${classeAdicional}">${model}</p>
    `;
    }
    render(model, error = false) {
        this.elemento.innerHTML = this.template(model, error);
    }
}
