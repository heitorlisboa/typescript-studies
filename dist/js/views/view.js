export default class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    render(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
