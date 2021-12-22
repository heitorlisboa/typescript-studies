export default class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error("Elemento não encontrado no DOM!");
        }
    }
    render(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
