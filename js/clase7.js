var juan = {
  nombre: 'Juan',
  apellido: 'Ponce',
  edad: 18
}
var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 19
}

function imprimirNombreEnMayusculas(persona){
  var { nombre } = persona;
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(juan);
imprimirNombreEnMayusculas(dario);
// imprimirNombreEnMayusculas({nombre: 'Pepito'});

// Reto case 7
console.log('Reto clase - 7');

function reto7(persona){
  var { nombre } = persona, { apellido } = persona, { edad } = persona;
  console.log(`Hoal soy ${nombre.toUpperCase()} ${apellido.toLowerCase()} y tengo ${edad}`);
}

reto7(juan);
reto7(dario);
