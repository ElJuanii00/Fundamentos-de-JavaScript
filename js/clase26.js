class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(fn){
    var { nombre, apellido, altura} = this;
    this.altura >= 1.8 ? console.log(`Hola, me llamo ${nombre} ${apellido}. Soy una persona alta y mido ${altura}`) : console.log(`Hola, me llamo ${nombre} ${apellido}. Soy una persona baja y mido ${altura}`);
    fn ? fn(nombre, apellido) : null;
  }

  soyAlto(){
    return this.altura >= 1.8;
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura);
  }

  saludar(fn){
    var { nombre, apellido } = this;
    // var nombre = this.nombre;
    // var apellido = this.apellido;
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador/a`);
    fn ? fn(nombre, apellido, true) : null;
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev){
    console.log(`Ah mira, no sabia que eras Desarrollador/a`);
  }
}

var juan = new Persona('Juan', 'Ponce', 1.82);
var erika = new Persona('Erika', 'Luna', 1.78);
var arturo = new Desarrollador('Arturo', 'Martinez', 1.75);

juan.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);
