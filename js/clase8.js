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

function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
  // persona.edad += 1;
  console.log(persona);
}

console.log(juan);
cumpleanos(juan);
