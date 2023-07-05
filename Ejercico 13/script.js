let notas = [90, 70, 60];
let sum = 0;

for (let i = 0; i < notas.length; i++) {
  sum += notas[i];
}

let promedio = sum / notas.length;

if (promedio > 70) {
  console.log("Aprobado");
} else {
  console.log("Recuperación");
}
