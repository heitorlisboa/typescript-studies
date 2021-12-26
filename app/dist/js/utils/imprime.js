export default function imprime(...objetos) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}
