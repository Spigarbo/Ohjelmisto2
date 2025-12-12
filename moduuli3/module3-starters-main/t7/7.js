'use strict';

const images = document.getElementById('target');
const trigger = document.getElementById('trigger');

const original_src = 'img/picA.jpg';
const original_alt = 'example';
const new_src = 'img/picB.jpg';
const new_alt = 'New image after hover';

function change() {
  if (images) {
    images.src = new_src;
    images.alt = new_alt;
    console.log(`Image changed: ${new_src}`);
  }
}

function restore() {
  if (images) {
    images.src = original_src;
    images.alt = original_alt;
    console.log(`Image restored: ${original_src}`);
  }
}

if (trigger) {
  trigger.addEventListener('mouseover', change);
  trigger.addEventListener('mouseout', restore);

}