'use strict'

const number_list = [];
let input;

while (true) {
  const number = prompt("Enter a number or enter 0 to exit");
  input = Number(number);
  if (input === 0) {
    break
  }
  number_list.push(input);

number_list.sort(function(a, b){return b-a});
}
for (const number of number_list) {
  console.log(number);
}
