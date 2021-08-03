function crearIterador(valores) {
    var inicial = 0;

    return {
        next: function() {
            return inicial < valores.length ? {data: valores[inicial++], done: false} : { done: true}
        }
    }
}
Array.from(Array(5)).map(x => Math.random()*50)


const iterador = crearIterador(Array.from(Array(5)).map(x => Math.random()*50));

let valor = iterador.next()

while (!valor.done) {
    console.log(valor.data)
    valor = iterador.next()
}
