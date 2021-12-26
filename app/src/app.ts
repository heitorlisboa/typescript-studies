import NegociacaoController from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector("[data-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adiciona();
  });
} else {
  throw new Error("Não foi possível iniciar a aplicação!");
}

const btnImportar = document.querySelector(`[data-btn="import"]`);
if (btnImportar) {
  btnImportar.addEventListener("click", () => {
    controller.importaDados()
  });
} else {
  throw new Error("Botão importar não encontrado!");
  
}
