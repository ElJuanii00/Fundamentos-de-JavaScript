function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = () => {
  this.altura >= 1.75 ? console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}mts de estatura, soy una persona alta`) : console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}mts de estatura, soy una persona baja`)
}
Persona.prototype.soyAlto = () => this.altura > 1.75;


var sasha = new Persona('Sasha', 'Lifszyc', 1.80);
var juan = new Persona('Juan', 'Ponce', 1.74);
var arturo = new Persona('Arturo', 'Martinez', 1.70);

sasha.saludar();
juan.saludar();
arturo.saludar();

sasha.soyAlto();
juan.soyAlto();
arturo.soyAlto();
