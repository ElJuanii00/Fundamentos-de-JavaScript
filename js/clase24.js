function heredaDe(prototipoHijo, prototipoPadre){
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.constructor = prototipoHijo;
}

function Persona(nombre, apellido, altura){
  this.nombre = nombre;
  this.apellido = apellido;
  this.altura = altura;
}

Persona.prototype.saludar = function() {
  this.altura >= 1.8 ? console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona alta y mido ${this.altura}`) : console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona baja y mido ${this.altura}`);
}

Persona.prototype.soyAlto = function() {
  return this.altura >= 1.8;
}

function Desarrollador(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}


// var juan = new Persona('Juan', 'Ponce', 1.82);
// var erika = new Persona('Erika', 'Luna', 1.78);
// var arturo = new Persona('Arturo', 'Martinez', 1.75);
