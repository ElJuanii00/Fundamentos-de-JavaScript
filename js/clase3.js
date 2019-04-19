var edad = 5;
edad++;
console.log(edad);

var peso = 75;
peso -= 2;
console.log(peso);

var sanddwich = 1;
peso += sanddwich;
console.log(peso);

var jugarAlFutbol = 3;
peso -= jugarAlFutbol;
console.log(peso);

var precioDeVino = 200.43454;
console.log(precioDeVino);

var total = Math.round(precioDeVino * 100 * 3) / 100;
console.log(total);

var totalStr = total.toFixed(2);
console.log(totalStr);

var total2 = parseFloat(totalStr);
console.log(total2);

var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;
console.log(cantidadDePorcionesPorPersona);
