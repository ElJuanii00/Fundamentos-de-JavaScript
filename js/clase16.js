var signo = prompt('¿Cual es tu signo?');

switch (signo) {
  case 'acuario':
  console.log('Acuario, tu signo, es el undécimo del zodíaco y se considera que es el signo de la perspectiva, el futuro y los nuevos proyectos. El Portador de Agua simboliza el desarrollo intelectual a través de la comunicación y la innovación. De todos los signos, eres el más idealista y humanitario, y tienes un gran sentido de la comunidad y la fraternidad.');
  break;
  case 'piscis':
  console.log('Romántico Piscis, eres el duodécimo y último signo del zodíaco. Eres el signo de la sensibilidad y la receptividad, un auténtico camaleón capaz de mutar y ser infinitamente complejo. Tus palabras clave son «comunión» y «visión», tienes la capacidad de ir más allá de este mundo y alcanzar la tierra de los sueños y el espíritu.');
  break;
  case 'libra':
  console.log('El encantador signo de Libra es el séptimo signo del zodíaco. Libra es sinónimo de armonía, justicia, igualdad y equilibrio. Se te considera el signo más educado y civilizado del zodíaco, ya que siempre muestras una actitud serena y ecuánime. Venus es tu astro. Gracias a él posees un encanto demoledor y aún más poderoso por el hecho de que lo expresas sin esforzarte.');
  break;
  default:
  console.log('No encontramos tu signo zodiacal valido');
}
