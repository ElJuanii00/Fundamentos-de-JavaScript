var juan = {
  nombre: 'Juan',
  apellido: 'Ponce',
  edad: 18,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

function imprimirProfeciones(persona){
  console.log(`${persona.nombre} es:`);
  if(persona.ingeniero){
    console.log('Ingeniero');
  } else {
    console.log('No es Ingeniero');
  }
  if(persona.cocinero){
    console.log('Cocinero');
  }
  if(persona.dj){
    console.log('Dj');
  }
  if(persona.cantante){
    console.log('Cantante');
  }
  if(persona.guitarrista){
    console.log('Guitarrista');
  }
  if(persona.drone){
    console.log('Piloto de Drone');
  }
}
imprimirProfeciones(juan);

const MAYOR_DE_EDAD = 18;

function esMayorDeEdad(edad){
  return edad >= MAYOR_DE_EDAD;
}

function mayorDeEdad({nombre, edad}){
  if(esMayorDeEdad(edad)){
    console.log(`${nombre} tiene ${edad} años y es mayor de edad`);
  } else{
    console.log(`${nombre} tiene ${edad} años y es menor de edad`);
  }
}

console.log('Reto de la clase 10');
mayorDeEdad(juan);
