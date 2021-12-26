import Comparavel from "./comparavel.js";
import Imprimivel from "./imprimivel.js";

export default interface Modelo<T> extends Imprimivel, Comparavel<T> {}
