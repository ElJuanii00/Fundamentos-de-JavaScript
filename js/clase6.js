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

function imprimirNombreEnMayusculas({ nombre }){
  console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(juan);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre: 'Pepito'});
imprimirNombreEnMayusculas();
