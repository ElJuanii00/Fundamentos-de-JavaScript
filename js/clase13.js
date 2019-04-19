var juan = {
  nombre: 'Juan',
  apellido: 'Ponce',
  edad: 17,
  peso: 70
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso}kg`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i=1; i <= DIAS_DEL_ANO; i++){
  var random = Math.random();
  if(random <= 0.25){
    aumentarDePeso(juan);
  } else if(random <= 0.50){
    adelgazar(juan);
  }
}

console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)}kg`);
