// interface define a interface de um objeto ou classe
// No caso de objetos, define como estes devem ser construídos, devendo conter somente as propriedades definadas no interface
// No caso de classes, define propriedades/métodos abstratos que a classe deve implementar, mas podendo implementar outras propriedades/métodos
export default interface NegociacaoDoDia {
  vezes: number;
  montante: number;
}
