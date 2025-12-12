'use strict';
const names = ['John', 'Paul', 'Jones'];

const target_element = document.getElementById('target');

let list_content = '';

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  list_content += `<li>${name}</li>`;
}

target_element.innerHTML = list_content;