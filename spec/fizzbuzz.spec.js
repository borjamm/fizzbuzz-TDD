const fizzBuzz = require("../fizzbuzz.js");

describe("FizzBuzz", () => {
  it("should print an error message if the argument is not a number", () => {
    const expected = "Error: the argument must be a number";
    const result = fizzBuzz("16");
    expect(expected).toBe(result);
  });

  it("should print 0 if they receive 0", () => {
    const expected = 0;
    const result = fizzBuzz(0);
    expect(expected).toBe(result);
  });

  it("should print 1 if they receive 1", () => {
    const expected = 1;
    const result = fizzBuzz(1);
    expect(expected).toBe(result);
  });

  it("should print Fizz if they receive 3", () => {
    const expected = "Fizz";
    const result = fizzBuzz(3);
    expect(expected).toBe(result);
  });

  it("should print Fizz if they receive a multiple of 3", () => {
    const expected = "Fizz";
    const result = fizzBuzz(6);
    expect(expected).toBe(result);
  });

  it("should print Buzz if they receive 5", () => {
    const expected = "Buzz";
    const result = fizzBuzz(5);
    expect(expected).toBe(result);
  });

  it("should print Buzz if they receive a multiple of 5", () => {
    const expected = "Buzz";
    const result = fizzBuzz(10);
    expect(expected).toBe(result);
  });

  it("should print FizzBuzz if they receive a multiple of 3 and 5", () => {
    const expected = "FizzBuzz";
    const result = fizzBuzz(15);
    expect(expected).toBe(result);
  });
});
