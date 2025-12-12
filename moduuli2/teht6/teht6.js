'use strict'

function roll_dice() {
  return Math.floor(Math.random() * 6) + 1;
}

function print_results(results) {
  console.log("<ul>");
  for (const  result of results) {
    console.log(`<li>${result}</li>`);
  }
  console.log("</ul>");
}

function main() {
  let result;
  let roll_amount = 0;

  do {
    result = roll_dice();
    roll_amount++;

    console.log(`Roll number ${roll_amount}: ${result}`);

  }
  while (result !== 6);
  console.log(`You rolled a 6, it took ${roll_amount} throws.`)
}
main();