console.log("Clase de estructura de datos")
//Primera manera de declarar un arreglo
var arreglo1= [] //arrreglo vacio
var arreglo2= ['Martin','Rene','Marco','Natalia','Gael'] //arreglo con elementos

//Segunda manera de declarar un arreglo

var arreglo3 = new Array() //arreglo vacio
var arreglo4 = new Array('Jorge','Quidel','Roberto','Cristobal','Benjamin')

//Acceder a los elementos a traves del indice del elemento dentro del array

console.log(arreglo4[3])
for (let i=0; i<arreglo4.length;i++){
	console.log(arreglo4[i])
}
for (let i=0; i<arreglo4.length;i++){
	if (i%2==0){
		console.log(arreglo4[i])
	}else{
		console.log("El elemento " +i+" no es par")
	}

}

//CONCATENAR DOS ARRAYS
var primerArray=["Rene","Daniel"]
var segundoArray=["Martin","Rolando"]

var concatenado = primerArray.concat(segundoArray,arreglo2,arreglo4)
console.log("Este es el concatenado")
console.log(concatenado)
var junto = primerArray.join(",")
console.log(junto)
//POP elimina el ultimo elemento del arreglo y lo regresa
var ultimo = arreglo2.pop()
console.log(ultimo)
//Push
console.log(arreglo2)
arreglo2.push(ultimo)
console.log(arreglo2)


//SPLICE
//Rolando separa el arreglo4 de concatenado
//splice(indiceDondeEmpieza,ElementosaBorrar,elementosnuevos)
console.log(concatenado)
for (let i =0; i<concatenado.length;i++){
	if(concatenado[i]==arreglo2[0]){
		concatenado.splice(i,arreglo2.length)
	}
}
console.log("Sin arreglo 2")
console.log(concatenado)
//Metodo shift y unshift (igual que el pop y el push pero con el primer elemento de la lista o arreglo)
arreglo2.unshift("Tomas")
var primerElemento = arreglo2.shift()
console.log(primerElemento)
//Split separar
var animales = 'Perros,gatos,tortugas,ballenas,viboras,hamster,loros,peces'
var animalesSeparados = animales.split(",")
console.log(animalesSeparados)
//Replace o reemplazar
var ejemploReplace = "Computadora"
var remplazar = ejemploReplace.replace("p","T")
console.log(remplazar) 
//Arrays con json (JAVASCRIPT OBJECT NOTATION)

//var estudiantes = new Arrary({nom...}, {nom...}) Definirlo como un objeto de clase Array
var estudiantes = [
	{ nombre:"Martin",
	 	appellido:"Bernabe",
	 	edad:16,
	 	mayor:false,
	 	sueldo:0
	
	},
	{ nombre:"Rolando",
	 	appellido:"Quispe",
	 	edad:17,
	 	mayor:false,
	 	sueldo:0
	
	},{ nombre:"Cristobal",
	 	appellido:"Zamora",
	 	edad:15,
	 	mayor:false,
	 	sueldo:0
	
	},{ nombre:"Natalia",
	 	appellido:"Roa",
	 	edad:16,
	 	mayor:false,
	 	sueldo:0
	
	},{ nombre:"Rene",
	 	appellido:"Manzano",
	 	edad:31,
	 	mayor:false,
	 	sueldo:15000
	
	}
]
console.log("Grupo de estudiantes")
for(let i=0;i<estudiantes.length;i++){
	console.log(estudiantes[i].nombre)
}
//Metodos funcionales 
//FOR EACH
estudiantes.forEach((elemento,indice,arreglo)=>{
	console.log(elemento.nombre)

})
//MAP
console.log(estudiantes)
var estudiantesmap =estudiantes.map((elemento,indice,arreglo)=>{
	if(elemento.edad>18){
		return {...elemento,mayor:true}
	}else{
		return {...elemento,mayor:false}
	}

})
console.log(estudiantesmap)
















