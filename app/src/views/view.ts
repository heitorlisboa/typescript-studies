// O <T> é conhecido como generic e serve pra manter um mesmo tipo em diferentes partes da classe mas que cada filho pode apresentar um tipo diferente diferente (obs.: pode-se declarar mais de um tipo separando-os por vírgula, exemplo: <T, K, L>)
// abstract serve para declarar uma classe abstrata, ou seja, que não pode ser instanciada, mas é somente utilizada para ser extendida por outras classes
export default abstract class View<T> {
  // protected é quase o mesmo que o private, porém deixa o atributo/método acessível aos filhos dessa classe, diferentemente do private que só permite que a classe em si acesse-o
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    const elemento = document.querySelector(seletor);
    if (elemento) {
      this.elemento = elemento as HTMLElement;
    } else {
      throw new Error("Elemento não encontrado no DOM!");
    }
  }

  protected abstract template(model: T, ...args: any[]): string;

  public render(model: T, ...args: any[]): void {
    this.elemento.innerHTML = this.template(model, ...args);
  }
}
