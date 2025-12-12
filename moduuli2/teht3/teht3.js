'use strict';

const number = 6;
const dognames = [];

for (let i =! 0; i < number; i++) {
  const name = prompt(`Dog number ${i+1} name:`);
  dognames.push(name);
}
dognames.sort().reverse();
const list = document.createElement('ol');

for (const name of dognames) {
  const li = document.createElement('li');
  li.textContent = name;
  list.appendChild(li);
}
document.body.appendChild(list);
