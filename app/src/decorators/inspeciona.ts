// Um decorator pode ser definido diretamente pela função que será utilizada pela função decorada, devendo, assim, retornar um descriptor cuja propriedade value deve conter a nova função que será utilizada pela função decorada
// Nesse caso, não é possível passar argumentos para o decorator e portanto não utiliza parênteses, exemplo: @nomeDoDecorator
// Outra maneira de definir um decorator está descrita no arquivo "loga-tempo-execucao.ts"
export default function inspeciona(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // Deve-se guardar a função original antes de modificá-la para que esta seja executada dentro da nova função
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`-- Método: ${propertyKey}`);
    console.log(`---- Parâmetros: ${JSON.stringify(args)}`);

    // É importante que a função original seja executada através do método .apply(), pois através dele é possível passar o thisArg (argumento this)
    // Note que não se deve utilizar o spread operator (...) na lista args, pois o método .apply() recebe como segundo argumento uma lista de argumentos
    const retorno = metodoOriginal.apply(this, args);

    console.log(`---- Retorno: ${JSON.stringify(retorno)}`);

    return retorno;
  };

  return descriptor;
}
