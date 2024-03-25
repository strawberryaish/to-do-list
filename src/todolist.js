'use strict';

const btnEnter = document.querySelector('.btn-enter');
const input = document.querySelector('.list-input');
const container = document.querySelector('.list-container');
const listUl = document.querySelector('.list-ul');

const listArray = [];



//creating list inside the existing ul


btnEnter.addEventListener('click', function() {

    if (listUl.childElementCount === 0) {
        container.classList.remove('hidden');
    }

    //creating element 
    const newList = document.createElement('li');
    const createRadio = document.createElement('input');
    const createLabel = document.createElement('label');
    
    
    //Setting attribute
    createRadio.setAttribute('type', 'radio');
    createRadio.setAttribute('id', listArray.length);
    createLabel.setAttribute('for', listArray.length);

    const radioID = listArray.length;

    createLabel.textContent = input.value;

    createRadio.classList.add('mr-2');

    newList.appendChild(createRadio);
    listUl.appendChild(newList); 
    newList.appendChild(createLabel);

    listArray.push(input.value);

    console.log(listArray);

    //Radio 
    createRadio.addEventListener('click', function() {
        console.log(radioID);
    })

})

