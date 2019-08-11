var juan = {
  nombre: 'Juan',
  apellido: 'Ponce',
  edad: 18
}

// const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})
