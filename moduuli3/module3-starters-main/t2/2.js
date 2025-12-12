'use strict';

const target_element = document.getElementById('target');

const items = [
    "First item",
    "Second item",
    "Third item"
];

for (let i = 0; i < items.length; i++) {
  const text = items[i];

  const new_item = document.createElement('li');
  new_item.textContent = text;

  if (i === 1) {
    new_item.className = 'my-item';
  }

  target_element.appendChild(new_item);

}