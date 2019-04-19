var contador = 0;
const llueve = () => Math.random() < 0.25;
const check = (contador) => contador === 1 ? console.log(`Llovio ${contador} vez`) : console.log(`Llovio ${contador} veces`);

do {
  contador++;
} while (!llueve());

check(contador);
