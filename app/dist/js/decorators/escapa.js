export default function escapa(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === "string") {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        return retorno;
    };
    return descriptor;
}
