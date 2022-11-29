console.log("Computer science")
//ECMASCRIPT 6
arreglo= ["Martin", "Marco", "Tomas", "Rene"]
//let para variables locales MUY USADO en contadores dentro de ciclos
for (let i=0; i<arreglo.length;i++){
    console.log(arreglo[i])
}


//rest operator
function sumacalculadora(...rest){
    let sumatoria =0
    for (let i=0;i<rest.length;i++){
        sumatoria +=rest[i]
    }
    return sumatoria

}
//operador spread
let ejemploSpread = [2,6,4,2,3]
//sumacalculadora(ejemploSpread)//Esto me marca error porque la funcion no recibe un arreglo, sino parametros 
sumacalculadora(...ejemploSpread)//Esto si funciona
//Template literals ECMASCRIPT 6
var resultadoRest = sumacalculadora(2,5,7,8,9)
console.log(`El resultado de la suma con el operador rest es ${resultadoRest}`)
//Estas dos funciones suman N cantidad de elementos
var arregloNumeros = []
function adicionarNumero(arr, num){
    arr.push(num)
    return arr
}
function sumaAntes(arr1){
    let sumatoria =0
    for (let i=0;i<arr1.length;i++){
        sumatoria +=arr1[i]
    }
    return sumatoria
}
// Esta funcion solamente suma dos numeros
function suma(a,b){
    let c= a+b
    return c
}

const sumarCalcu=()=>{
    var inputn =document.getElementById("numeritos")
    var numerosSumar = inputn.value
    var arregloNumbers = numerosSumar.split("+")
    console.log(arregloNumbers)
    arregloTransformado = []
    arregloNumbers.forEach(element => {
        arregloTransformado.push(parseFloat(element))
    });
    var resultado = sumaAntes(arregloTransformado)
    alert(resultado)

}
//Operador spread
//Objetos json
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }
console.log(clonedObj)


const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj)
const ejemplo = ()=>{
    //objeto json javascript object notation 
    alumno1 = {
        nombre:"Martin",
        edad:16
    }
    return alumno1
}
var resultadoRolando = ejemplo()
var nombreObjeto = resultadoRolando.nombre
var edadObjeto = resultadoRolando.edad




//deconstruir un objeto json
({nombre,edad} = ejemplo())
console.log(nombre)