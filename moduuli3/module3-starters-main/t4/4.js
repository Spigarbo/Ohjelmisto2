'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target_element = document.getElementById('target');

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const new_option = document.createElement('option');

  new_option.value = student.id;
  new_option.textContent = student.name;
  target_element.appendChild(new_option);


}