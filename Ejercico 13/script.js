const notas = [90, 70, 60];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

const promedio = suma / notas.length;

if (promedio > 70) {
  console.log("Aprobado");
} else {
  console.log("Recuperación");
}
