console.log("Colas")

//COLAS
//Una cola es una estructura de datso, caracterizada por ser una secuencia de eleentos en la que la operacion de insercion push se realiza por un extremo y la operacion de extraccion pull por el otro. Tambien se le conoce estructura FIFO Firs in First Out, debido a que el primer elemento en entrar sera tambien el primero en salir

//IMPLEMENTACION BASICA CON UN ARREGLO
var cola = []

console.log(cola.push("Rolando"))
console.log(cola.push("Natalia"))
console.log(cola.push("Giovanny"))
console.log(cola.push("Rene"))
console.log(cola)

//sacar elementos de cola
console.log(cola.shift())
console.log(cola.shift())

console.log(cola)
//IMPLEMENTACION DE UNA COLA CON CLASE

class Queue {
	constructor(){
	 this.collection  = []
	 this.counter = 0
	}
	encolar(nuevoElemento){
	this.collection.push(nuevoElemento)
	this.counter++
	return this.counter
	
	
	}
	descolar(){
		const elementoDesencolado = this.collection.shift()
		this.counter --
		return elementoDesencolado
	}
	longitud(){
		return this.longitud
	}
	isEmpty(){
		if(this.longitud()== 0)return true
		return false
	}
	front(){
		if(this.longitud()==0) return null
		return this.collection[0]
	}
	back(){
		if(this.longitud()==0) return null
		return this.collection[this.longitud-1]
	}
	
}
const colaAlumnos = new Queue()

console.log(colaAlumnos.encolar("Andres"))
console.log(colaAlumnos.encolar("Taylor"))
console.log(colaAlumnos.encolar("Roberto"))
console.log(colaAlumnos.encolar("Benjamin"))
console.log(colaAlumnos)

//Quitar elementos 
console.log(colaAlumnos.descolar())
console.log(colaAlumnos.descolar())
console.log(colaAlumnos)
