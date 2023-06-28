// Variables
let firstname = prompt("Ingresa tu nombre:");
let subject = prompt("Ingresa el nombre de la materia:");
let like = confirm("¿Te gusta la materia?");

//me gusta o no
let decition = like ? "me gusta" : "no me gusta";


console.log("Hola soy " + firstname + " estudiante de la materia de " + subject + ".");
console.log("Esta materia " + decition + ".");
