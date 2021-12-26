// Também é possível fazer decorators para propriedades de classes, para isso é possível utillizar o Object.defineProperty para redefinir a propriedade decorada
export default function domInjector(seletor: string) {
  return function (target: any, propertyKey: string) {
    let elemento: HTMLElement;
    const getter = function () {
      if (!elemento) {
        elemento = document.querySelector(seletor) as HTMLElement;
      }

      return elemento;
    };

    // target refere-se à classe na qual a propriedade foi instânciada
    // propertyKey é o nome da propriedade
    // O terceiro parâmetro é um descriptor da propriedade
    Object.defineProperty(target, propertyKey, { get: getter });
  };
}
