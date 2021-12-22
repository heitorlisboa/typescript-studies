// Um decorator pode ser definido retornando uma função - como no caso abaixo - que será utilizada pela função decorada, assim, podendo passar argumentos para o decorator. Nesse caso, o uso do decorator é @nomeDoDecorator(...argumentos)
// Outra maneira de definir um decorator está descrita no arquivo "inspeciona.ts"
// A função retornada deve retornar um descriptor cuja propriedade value deve conter a nova função que será utilizada pela função decorada
export default function logaTempoExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
      let divisor = 1;
      let unidade = "milisegundos";
      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }

      const t1 = performance.now();

      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();
      console.log(
        `${propertyKey}, execução levou ${(t2 - t1) / divisor} ${unidade}`
      );

      return retorno;
    };

    return descriptor;
  };
}
