console.log("Esta es la clase de algoritmos de busqueda")
/*
ALGORITMO DE BUSQUEDA SECUENCIAL
Entrada:
1)Lista con los elementos (datos)
2)Elemento a buscar

Salida o output del algoritmo:
Si se encuentra el valor, retorma la posicion o indice donde se encontro
Si no se encuentra el valor a buscar, entonces retorna -1
PSEUDOCODIGO
funcion BusquedaLineal(lista,elemento)
    tamanioLista = se halla el tamanio de la lista de datos
    contador = indice desde donde vamos a iterar
    Mientra contador < tamanioLista:
        si lista[contador] == elemento
            si si, REGRESA EL INDICE
        si no, REGRESA -1
        FIN DE LA FUNCION
*/
const busquedaLineal=(lista, elementoAbuscar)=>{
    const size = lista.length
    let index = 0
    let cantidadAparicion = 0
    let posicionAparicion = []
    let numOperaciones = 0
    while (index <size){
        numOperaciones++
        let elementoPresente = lista[index]
        if(elementoPresente ==elementoAbuscar){
            cantidadAparicion++
            posicionAparicion.push(index)
        }
        index++




    }
    if(cantidadAparicion>0){
        return {
            numero_apariciones: cantidadAparicion,
            posiciones_encontradas: posicionAparicion,
            operaciones:numOperaciones
        }
    }

    return `El elemento ${elementoAbuscar} no se encontro`

}
const miLista = [10,15,34,436324,34,65,334,6564,4,43,65,768,9,424,763,43,73,22,75,3,335]
const resultado = busquedaLineal(miLista,73)
if(resultado.numero_apariciones>0){
    console.log(`Si existe tu numer0, aparece ${resultado.numero_apariciones} veces, en las posiciones ${resultado.posiciones_encontradas}, y el algoritmo Busqueda secuencial hizo ${resultado.operaciones} iteraciones`)
} else{
    console.log(resultado)
}

/*
BUSQUEDA BINARIA
Nota:Si se requiere forzosamente que a lista este ordenada previamente a hacer la busqueda

ENTRADA:
1) La lista ordenada de datos
2) El elemento a buscar en la lista de datos

SALIDA:
Si el elemento existe:
 si si, retornamos el indice o indices, donde se encontro el elemento,
 si no, regresa -1 o False

PSEUDOCODIGO:
funcion busquedaBinaria(listaOrdenada, elementoAbuscar):
    min= el inicio de la lllista (se empieza por lo general en la posicion 0)
    max= largo de la lista -1


    Mientras min<= max
        mitad = redondearHaciabajo(min+max/2)
        guess = listaOrdenada[mitad]
        si(elementoAbuscar === guess){
            retorna mitad
        }
        si(elementoAbuscar>guess){
            min= mitad+1

        }si(elementoAbuscr<guess){
            max = mitad-1
        }

        retornar -1 o false

        FIN DE LA FUNCION


*/
//PRIMERO TENGO QUE ORDENAR LA LISTA DE DATOS
var arrayNumeros = [4,2,76,3,6,5,454,44,11]
arrayNumeros.sort((a,b)=>a-b)
const busquedaBinaria=(listaOrdenada,elemento)=>{
    let min=0, max=listaOrdenada.length -1, mitad = null, guess = null, contadorVeces=0
    while(min<=max){
        contadorVeces++
        mitad = Math.floor((min+max)/2)
        guess = listaOrdenada[mitad]
        if(elemento === guess){
            console.log(`Este es el numero de veces ${contadorVeces} que se itero`)
            return mitad
        }
        if(elemento>guess){
            min= mitad+1

        }if(elemento<guess){
            max = mitad -1
        }
    }
    return -1

}
miLista.sort((a,b)=>a-b)
console.log('BUSQUEDA BINARIA')
const resultadoBinario = busquedaBinaria(miLista,73)
if (resultadoBinario>=0)console.log(`Si existe tu numero y esta en la posicion ${resultadoBinario}`)
if(resultadoBinario==-1)console.log("NO EXISTE TU NUMERO")

//Crear una funcion que encuentre las letras en un arreeglo de numeros  y letras y regrese un arreglo de puras letras
//input ([5,8,'u',3,'a','z',65,2])
//salida output ['u','a','z']
const busquedaLetras = (arreglo)=>{
    var outputArreglo =[]
    var posiciones = []
    var abecedario =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i =0; i<abecedario.length; i++){
        for(let j=0; j<arreglo.length;j++){
            if(abecedario[i]===arreglo[j])
            posiciones.push(j)
        }
    }
 
    for (let i=0;i<posiciones.length;i++){
        outputArreglo.push(arreglo[posiciones[i]])
    }
    console.log('finalizo')
    return outputArreglo
}

console.log(busquedaLetras([4,235,6423,5,64,'a',7,'j','l',767,65437,'g',4624,'f']))

// AGENDA
//Creamos una clase llamada contacto con los siguientes datos
//Nombre
//Appelido
//telefomo

//Despues creamos una clase que sea listaComtactos la cual tendra dos metodos que seran, agrega y buscar contacto por nombre, si quieren tambien borra contacto

class Contacto{
    constructor(nombre,apellido,telefono){
        this.nombre = nombre,
        this.apellido = apellido,
        this.telefono = telefono
    }
}


class Agenda{
    constructor(){
        this.lista= []
    }
    agregar(contacto){
        this.lista.push(contacto)
    }
    buscar(nombre){
        console.log(this.lista)
        var listaaux = this.lista
        for(let i=0;i<listaaux.length;i++){
            if(nombre==listaaux[i].nombre){
                return listaaux[i]
            }
        }
        return `No se encontro ${nombre} en la agenda`
    }
}

var reneContacto = new Contacto("Rene","Manzano",654643647)
var rolandoContacto = new Contacto("Rolando","Quispe",4543523534)
var jorgeContacto = new Contacto("Jorge","Vera",65634563)
var agendaDevf = new Agenda()
agendaDevf.agregar(reneContacto)
agendaDevf.agregar(rolandoContacto)
agendaDevf.agregar(jorgeContacto)

console.log(agendaDevf.buscar("Rene"))
console.log(agendaDevf.buscar("Daniel"))