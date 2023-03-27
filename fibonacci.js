const num = parseInt(prompt("Digite um número: "));

let a = 0, b = 1;
let pertence = false;

if (num === a || num === b) {
  pertence = true;
}

while (b < num) {
  const temp = a + b;
  a = b;
  b = temp;

  if (b === num) {
    pertence = true;
    break;
  }
}

if (pertence) {
  console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
