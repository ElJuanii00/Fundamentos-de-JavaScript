function heradeDe(prototipoHijo, prototipoPadre){
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function () {
  this.altura >= 1.75 ? console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}mts de estatura, soy una persona alta`) : console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}mts de estatura, soy una persona baja`)
}
Persona.prototype.soyAlto = function () {
  return this.altura > 1.75;
}

function Desarrollador(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

heradeDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy un Desarrollador`)
}


// var sasha = new Persona('Sasha', 'Lifszyc', 1.80);
// var juan = new Persona('Juan', 'Ponce', 1.74);
// var arturo = new Persona('Arturo', 'Martinez', 1.70);
