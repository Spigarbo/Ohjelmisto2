'use strict'
const monta = 5;
const numerot = [];

for (let i = 0; i < monta; i++) {
  const arvo = prompt(`Anna arvo ${i+1}:`);
  numerot.push(arvo);
}

for (let i = numerot.length - 1; i >= 0; i--) {
  console.log(numerot[i])
}

//TEHTY VÄÄRIN KORJAA!!!!