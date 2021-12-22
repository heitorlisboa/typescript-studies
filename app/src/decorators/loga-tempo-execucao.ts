export default function logaTempoExecucao() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value
    descriptor.value = function(...args: any[]) {
      const t1 = performance.now()

      const retorno = metodoOriginal.apply(this, args)

      const t2 = performance.now()
      console.log(`${propertyKey}, execução levou ${(t2 - t1)/1000} segundos`)

      return retorno
    }

    return descriptor
  }
}