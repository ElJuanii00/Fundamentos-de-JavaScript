class Persona {
  constructor(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
  }

  saludar(){
    this.altura >= 1.8 ? console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona alta y mido ${this.altura}`) : console.log(`Hola, me llamo ${this.nombre} ${this.apellido}. Soy una persona baja y mido ${this.altura}`);
  }

  soyAlto(){
    return this.altura >= 1.8;
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura);
  }

  saludar(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
  }
}

// var juan = new Persona('Juan', 'Ponce', 1.82);
// var erika = new Persona('Erika', 'Luna', 1.78);
// var arturo = new Persona('Arturo', 'Martinez', 1.75);
