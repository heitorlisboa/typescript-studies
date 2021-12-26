import Imprimivel from "../interfaces/imprimivel.js";

export default function imprime(...objetos: Imprimivel[]) {
  for (let objeto of objetos) {
    console.log(objeto.paraTexto());
  }
}
