let nombre="MateoCalle";
let contador =0;
let letra = prompt("ingrese una letra");
for (let i = 0; i < nombre.length; i++) {
    if (nombre[i]== letra) {
        contador++;
      }
  }
  console.log("el numero de letra(s) ",letra," que hay en el nombre es",contador);