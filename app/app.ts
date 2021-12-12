import NegociacaoController from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector("[data-form]");
form.addEventListener("submit", (event) => {
  event.preventDefault()
  controller.adiciona();
});
