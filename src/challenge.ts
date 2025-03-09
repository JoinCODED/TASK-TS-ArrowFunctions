// Why did we import this? 🤔
import { square } from "./arrowFunctions";

/**
 * 🌶️🌶️
 * squares(numbers):
 * - Accepts "numbers" parameter of type "number[]"
 * - returns an array of numbers were each element of "numbers" argument is squared
 * - write it as an arrow function
 * - Before you start, **comment out** the existing `square` function below
 * - The arrow function must have the **same type declaration** as the original function
 */

// Comment out this function before starting your solution
// function squares(numbers: number[]): number[] {
//   numbers.forEach(square);
//   return numbers;
// }
const squares = (numbers: number[]): number[] => {
  return numbers.map(n => square(n));
}

// example:
squares([1, 2, 3]); // => [1, 4, 9]

export { squares };
