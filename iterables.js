function crearIterador(arreglo){
    var siguienteIndice = 0;

    return {
        next : function(){
            return siguienteIndice < arreglo.length ?
            {value: arreglo[siguienteIndice++], done: false} :
            {done: true}
        }
    }
}

var it = crearIterador(['yo', 'ya']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
