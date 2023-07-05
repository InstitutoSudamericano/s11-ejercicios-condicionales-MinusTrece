const edades = [8, 18, 25, 10, 30, 15, 20];
let contador = 0;

for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    contador++;
  }
}

console.log("Cantidad de personas mayores de edad:", contador);
