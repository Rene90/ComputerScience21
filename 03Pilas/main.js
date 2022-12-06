console.log("Pilas")

//STACK O PILA
//Una pila es una lista ordenada o estructura de datos que permite almacenar y recuperar datos, siendo el modo de acceso de sus elementos de tipo LIFO (Last In First Out, ultimo en entrar, primero en salir)

//implementacion basica de una pila usando un array

var pila = []

//Agregar elementos a la pila
console.log(pila.push("El Principito"))//["El Principito"]
console.log(pila.push("Rayuela"))// ["El Principito", "Rayuela"]
console.log(pila.push("Coleccion de oro de condorito"))// ["El Principito", "Rayuela","coleccion de oro de condorito"]

console.log(pila.pop())//Elimina el ultimo elemento y lo regresa Coleccion de oro de condorito
console.log(pila.pop())//Elimina el ultimo elemento y lo regresa Rayuela

//IMPLEMENTACION DE UNA PILA USANDO CLASES

class Stack{
	constructor(){
		this.collection = [];
		this.counter = 0;
	}
	push(nuevoElemento){
		this.collection.push(nuevoElemento)
		this.counter++
		return this.counter;
	
	}
	pop(){
	 	const elementoBorrado = this.collection.pop()
	 	this.counter--
	 	return elementoBorrado
	}
	longitud(){
		return this.counter
	
	
	}
	peek(){
		if(this.longitud()==0){
		return null}
		return this.collection[this.counter-1]
	}
	
	isEmpty(){
		if(this.longitud()==0) return true
		return false
	
	}	
}

//Crear un objeto de la clase Stack
const pilaAlumnos = new Stack()
console.log(pilaAlumnos)
//Apilando elementos a mi stack pilaAlumnso con Push()

console.log(pilaAlumnos.push('Stephano Arenas'))
console.log(pilaAlumnos.push('Cristobal Roman'))
console.log(pilaAlumnos.push('Rolando Quispe'))
console.log(pilaAlumnos.push('Rene MAnzano'))
console.log(pilaAlumnos)

//Desapilar elementos de mi stack pila con POP
console.log(pilaAlumnos.pop())
console.log(pilaAlumnos.pop())
console.log(pilaAlumnos)

//Ver el tamanio de nuestra pila con longitud()
console.log(pilaAlumnos.longitud())
//Ver el ultimo elemento de nuestra pila con peek
console.log(pilaAlumnos.peek())
console.log(pilaAlumnos.push("Alumno Nuevo"))
//A este punto mi pila tiene tres elementos
//Verificando si nuestra pila esta vacia

console.log(pilaAlumnos.isEmpty())
console.log(pilaAlumnos.pop())
console.log(pilaAlumnos.pop())
console.log(pilaAlumnos.pop())
console.log(pilaAlumnos.isEmpty())//A este punto la pila esta vacia y dara true









