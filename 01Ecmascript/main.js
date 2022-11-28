console.log("Computer science")
//ECMASCRIPT 6
arreglo= ["Martin", "Marco", "Tomas", "Rene"]
//let para variables locales MUY USADO en contadores dentro de ciclos
for (let i=0; i<arreglo.length;i++){
    console.log(arreglo[i])
}


//rest operator
function sumacalculadora(...rest){
    

}

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
