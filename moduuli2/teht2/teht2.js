'use strict';

const number = Number(prompt("How many participents?"));
const participants = [];

for (let i = 0; i < number; i++) {
  const name = prompt(`Participant number ${i+1} name:`);
  participants.push(name);
}
participants.sort();
const list = document.createElement('ol');

for (const name of participants) {
  const li = document.createElement('li');
  li.textContent = name;
  list.appendChild(li);
}
document.body.appendChild(list);
