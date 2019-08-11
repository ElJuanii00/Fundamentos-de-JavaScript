const juan = {
  nombre: 'Juan',
  apellido: 'Ponce'
}
const pepe = {
  nombre: 'Pepe',
  apellido: 'Maduro'
}
const yesika = {
  nombre: 'Yesika',
  apellido: 'Cortes'
}

function saludar(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarAJuan = saludar.bind(juan)
// const saludarAYesika= saludar.bind(yesika)
// const saludarAPepe = saludar.bind(pepe)
//
// setTimeout(saludar.bind(juan,'Hola che'), 1000)

// saludar.call(juan, 'Hola che')

// saludar.apply(juan, ['Hola che'])
