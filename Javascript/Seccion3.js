// ES6 (map, arrows functions, spread)

//map 

/* 

Permite transformar elementos de un array sin modificar el original

*/

const numbers = [[14,24,34,68], 2, 3, 4, 5,]

const newArray = numbers[0].map(number => number * 2);

console.log(newArray);

//spread operator

/* 

Es un operador que permite expandir elementos de un array, realizando una copia
del array original sin modificarlo y sin perder sus elementos, y agregando nuevos
valores

*/

const moreNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(moreNumbers);

const User = {
  name: "Delvis",
  age: 23
}

const updatedUser = { ...User, country: "Venezuela"}

console.log(updatedUser);

const numbersBidimensionales =[
  [1, 2, 3],
  [4, 5, 6],]

const newNumbersBidimensionales = [...numbersBidimensionales, [7, 8, 9]];

console.log(newNumbersBidimensionales);

const esteSiDefinitivoTesisV5EstaSi = [newNumbersBidimensionales, [10, 11, 12]];

console.log(esteSiDefinitivoTesisV5EstaSi);

//Desestructuracion

/* 

Permite extraer elementos de un objeto u array y asignarlos a variables
de una manera mas directa

*/

//Para Objetos

const person1 = {
  names: "Delvis",
  age: 23,
  country: "Venezuela",
  city: "Caracas"
}

const person1Name = person1.names;

const person1Age = person1.age;

console.log(person1Name);

const {names, age, country, city} = person1;

//Para Arrays

const colors =["red", "green", "blue", "yellow"];

const [color1, color2, color3, color4] = colors;

console.log(color1);

//En funciones

function IntroduceMe({names}) {
  console.log(`Hola, soy ${names}, el desarrollador de este sitio web`);
}

IntroduceMe(person1);

//DOM


//Ejemplo de uso de DOM

//Crear un nuevo elemento del DOM

const newDiv = document.createElement("div")

//Propiedades de un elemento del dom manipulables desde js

/* newDiv.innerHTML = `<h1>Esto es un nuevo div</h1>`

newDiv.className = "Button"

newDiv.id = "newDiv"

newDiv.style.color = "red"

newDiv.innerText = "Esto es un parrafo"

document.body.appendChild(newDiv) */

//Selectores

//Por el nombre del tag

const h1 = document.querySelector("h1")

h1.innerText = "Esto es un h1"

h1.className = "Tittle"

// Otras formas

/* const h1 = document.querySelector("h1")

const h1s = document.querySelectorAll("h1") 

*/

//Por la clase

const button = document.getElementsByClassName("Button")

button[0].innerText = "Esto es un boton"

//Por id

const container = document.getElementById("principal")

container.className = "Container"

//Por querySelector 

const container2 = document.querySelector("#principal")

//Todos los elementos de una clase

const buttons = document.querySelectorAll(".Button")

buttons.forEach((button, index) => {
  button.innerText = `Esto es el boton ${index + 1}`
})

//Eventos

const goodButton = document.querySelector("#buton-bueno")

goodButton.addEventListener("click", () => {
  console.log("Presionaste el boton bueno")
})

