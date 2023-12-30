// Función para generar un número aleatorio entre 0 y 36 (inclusive)
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 37);
  }
  
  // Función que simula el giro de la ruleta y devuelve el número ganador
  function girarRuleta() {
    return generarNumeroAleatorio();
  }
  
  // Función que determina si un número apostado es ganador
  function esNumeroGanador(numeroApostado, numeroGanador) {
    return numeroApostado === numeroGanador;
  }
  
  // Ejemplo de uso
  const numeroApostado = 15; // Número proveniente del usuario
  const numeroGanador = girarRuleta();
  
  if (esNumeroGanador(numeroApostado, numeroGanador)) {
    console.log(`Felicidades, ganaste! El número ganador es ${numeroGanador}.`);
  } else {
    console.log(`Lo siento, perdiste. El número ganador es ${numeroGanador}.`);
  }
  