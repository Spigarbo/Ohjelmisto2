'use strict';

const kohde = document.querySelector('#target');
target.innerHTML = '<ul>'

const alku = parseInt(prompt('Syötä aloitusvuosi'),10);
const loppu = parseInt(prompt('Syötä lopetusvuosi'), 10);

for(let i = alku; i <= loppu; i++) {
    if(i % 4 === 0){
        kohde.innerHTML += `<li>${i}</li>`;
    }
}
target.innerHTML += '</ul>';