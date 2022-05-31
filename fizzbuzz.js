const DEFAULT_NUMBER = 15;

function fizzBuzz(num) {
  if (typeof num !== "number") return "Error: the argument must be a number";

  const divisible = (divider, number) => number % divider === 0;

  if (num === 0) return 0;
  if (divisible(15, num)) return "FizzBuzz";
  if (divisible(3, num)) return "Fizz";
  if (divisible(5, num)) return "Buzz";

  return num;
}

function printResult(num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzBuzz(i)}`);
  }
}

function getNumber() {
  const argNumber = Number(process.argv[2]);
  return !isNaN(argNumber) ? argNumber : DEFAULT_NUMBER;
}

function play() {
  const number = getNumber();
  printResult(number);
}

play();

module.exports = fizzBuzz;
