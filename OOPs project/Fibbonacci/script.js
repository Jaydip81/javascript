function Sequence() {
  if (this.constructor === Sequence) {
    throw new Error("Cannot instantiate abstract class");
  }
}

Sequence.prototype.getValue = function (n) {
  throw new Error("Method 'getValue' must be implemented");
};

function FibonacciSequence() {
  Sequence.call(this);
}

FibonacciSequence.prototype = Object.create(Sequence.prototype);
FibonacciSequence.prototype.constructor = FibonacciSequence;

FibonacciSequence.prototype.getValue = function (n) {
  if (n <= 0) {
    throw new Error("Invalid input. n must be a positive integer.");
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  let prev = 1;
  let current = 1;
  let next;

  for (let i = 3; i <= n; i++) {
    next = prev + current;
    prev = current;
    current = next;
  }

  return current;
};

function calculateFibonacci() {
  let n = parseInt(document.getElementById("fibInput").value);

  if (isNaN(n) || n <= 0) {
    document.getElementById("fibonacciOutput").textContent =
      "Please enter a positive integer.";
    return;
  }

  let fibonacciSequence = new FibonacciSequence();

  try {
    let result = fibonacciSequence.getValue(n);
    document.getElementById(
      "fibonacciOutput"
    ).textContent = `The ${n}th Fibonacci number is: ${result}`;
  } catch (error) {
    console.error(error.message);
    document.getElementById(
      "fibonacciOutput"
    ).textContent = `Error: ${error.message}`;
  }
}