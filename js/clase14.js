var juan = {
  nombre: 'Juan',
  apellido: 'Ponce',
  edad: 17,
  peso: 70
}

console.log(`Al inicio del año ${juan.nombre} pesa ${juan.peso}kg`);

const INCREMENTO_PESO = 0.3;
const DIAS_DEL_ANO = 365;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = juan.peso - 3;
var dias = 0;

while (juan.peso > META) {
  if(comeMucho()){
    aumentarDePeso(juan);
  }

  if(realizaDeporte()){
    adelgazar(juan);
  }
  dias += 1;
}

console.log(`Pasaron ${dias} dias hasta que ${juan.nombre} adelgazo 3kg`)
console.log(`Al final del año ${juan.nombre} pesa ${juan.peso.toFixed(1)}kg`);
