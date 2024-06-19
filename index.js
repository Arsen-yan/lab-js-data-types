/* ******************************************
    Iteration 1.1 | Tongue Twister
****************************************** */
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = `${s1} ${s2} ${s3} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(tongueTwister); //"Fred fed Ted bread and Ted fed Fred bread"

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "javai";
const part2 = "script";
let result;

function lasLetterUpperCase(arg1, arg2) {
  let lastLetterpart1 = arg1.charAt(arg1.length - 1).toUpperCase();
  let firstLettersPart1 = arg1.slice(0, arg1.length - 1);
  let res1 = firstLettersPart1 + lastLetterpart1;

  let lastLetterpart2 = arg2.charAt(arg2.length - 1).toUpperCase();
  let firstLettersPart2 = arg2.slice(0, arg2.length - 1);
  let res2 = firstLettersPart2 + lastLetterpart2;
  result = res1 + res2;

  return result;
}

console.log(lasLetterUpperCase(part1, part2));

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/

const billTotal = 84;
const tipAmount = (15 / 84) * 100;

console.log(
  `The 15% of 84$ is ${tipAmount}$ or to do it little bit round  ${Math.floor(
    tipAmount
  )}$ `
);

// Calculate the tip (15% of the bill total)

// Print out the tipAmount

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
const randomNumber = Math.floor(Math.random() * (11 - 1) + 1);
console.log(randomNumber);
// Generate a random integer between 1 and 10 (inclusive)

// Print the generated random number

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true

const expression3 = !a && b; // false

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b); // false

const expression7 = a && a; // true

console.log(
  expression1,
  expression2,
  expression3,
  expression4,
  expression5,
  expression6,
  expression7
);
