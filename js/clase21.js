function Persona(nombre, apellido, altura){
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  this.altura >= 1.8 ? console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona alta y mido ${this.altura}`) : console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona baja y mido ${this.altura}`);
}

var juan = new Persona('Juan', 'Ponce', 1.82);
var erika = new Persona('Erika', 'Luna', 1.78);
var arturo = new Persona('Arturo', 'Martinez', 1.75);


// if(this.altura >= 18){
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona alta y mido ${this.altura}mts`);
// } else {
//   console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona baja y mido ${this.altura}mts`);
// }
