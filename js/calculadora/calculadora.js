let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicar, dividir)").toLowerCase();

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

let resultado;
switch (operacion) {
  case "suma":
  case "+":
    resultado = num1 + num2;
    break;

  case "resta":
  case "-":
    resultado = num1 - num2;
    break;

  case "multiplicar":
  case "*":
    resultado = num1 * num2;
    break;

  case "dividir":
  case "/":
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Error: No se puede dividir entre cero.";
    }
    break;

  default:
    resultado = "Operación no válida. Intenta de nuevo.";
}

alert(`El resultado es: ${resultado}`);
console.log(`Resultado: ${resultado}`);