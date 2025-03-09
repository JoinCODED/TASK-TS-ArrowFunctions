/**
 * Rewrite the following `greet` function as an arrow function
 * Before you start, **comment out** the existing `greet` function below
 * The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
// function greet(name: string): string {
//   return `Hello ${name}`;
// }

const greet = (name: string) => `Hello ${name}`;

// example:
greet("Aziz"); // => "Hello Aziz"

/**
 * sum(a, b):
 * - Accepts 2 parameters (a and b)
 * - Accepts "a" parameter of type "number"
 * - Accepts "b" parameter of type "number"
 * - return the sum of "a" and "b"
 * - write it as an arrow function
 * - Before you start, **comment out** the existing `sum` function below
 * - The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
// function sum(a: number, b: number): number {
//   return Infinity;
// }

const sum = (a: number, b: number): number => a + b;

// example:
sum(5, 7); // => 12

/**
 * square(n):
 * - Accepts "n" parameter of type "number"
 * - returns the square of "n"
 * - write it as an arrow function
 * - Before you start, **comment out** the existing `square` function below
 * - The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
// function square(n: number): number {
//   return Infinity;
// }

const square = (n: number): number => n ** 2;

// example:
square(4); // => 16
square(10); // => 100

export { greet, sum, square };
