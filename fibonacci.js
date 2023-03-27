function fibonacci(n) {
  // Inicializa a sequência de Fibonacci com os dois primeiros valores
  let fibonacciSeq = [0, 1];
  
  // Calcula os valores da sequência até o número informado
  while (fibonacciSeq[fibonacciSeq.length - 1] < n) {
    let nextFibonacci = fibonacciSeq[fibonacciSeq.length - 1] + fibonacciSeq[fibonacciSeq.length - 2];
    fibonacciSeq.push(nextFibonacci);
  }
  
  // Verifica se o número informado pertence à sequência de Fibonacci
  if (fibonacciSeq.includes(n)) {
    return `O número ${n} pertence à sequência de Fibonacci: ${fibonacciSeq.join(", ")}.`;
  } else {
    return `O número ${n} não pertence à sequência de Fibonacci.`;
  }
}

// Teste
console.log(fibonacci(13)); // O número 13 pertence à sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13.
console.log(fibonacci(7)); // O número 7 não pertence à sequência de Fibonacci.
