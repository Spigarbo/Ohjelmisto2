'use strict';

//kysy nimeä
name = prompt('What might your name be you dirty muggle?')
//arvo huone (numero 1 - 4)
const house = Math.floor(Math.random() * 4);

const houses= ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']

console.log(`My apologies! Didn't notice the magic flowing through your veins. ${name}, your house is ${houses[house]}`)