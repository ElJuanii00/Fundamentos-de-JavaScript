var juan = {
  nombre: 'Juan',
  apellido: 'Ponce',
  edad: 17,
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

const esMayorDeEdad = ({edad}) => edad >= MAYOR_DE_EDAD;
const permitirAcceso = ({edad, nombre, apellido}) => !esMayorDeEdad({edad}) ? console.log(`Nombre: ${nombre} ${apellido} y tiene ${edad} años de edad. Estatus: Acceso Denegado`) : console.log(`Nombre: ${nombre} ${apellido} y tiene ${edad} años de edad. Estatus: Acceso Permitido`);

function mayorDeEdad(persona){
  if(esMayorDeEdad(persona)){
    console.log(`${persona.nombre} tiene ${persona.edad} años y es mayor de edad`);
  } else{
    console.log(`${persona.nombre} tiene ${persona.edad} años y es menor de edad`);
  }
}


console.log('Reto de la clase 12');
mayorDeEdad(juan);
permitirAcceso(juan);
