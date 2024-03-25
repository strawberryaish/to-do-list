'use strict';

const listArray = [];
const arrayList = listArray.length;

const btnEnter = document.querySelector('.btn-enter');
const input = document.querySelector('.list-input');
const container = document.querySelector('.list-container');
const listUl = document.querySelector('.list-ul');
const completedTasks = document.querySelector('.completed-tasks');
const completedLists = document.querySelector('.completed-lists');



btnEnter.addEventListener('click', function() {


    //creating element 
    const newList = document.createElement('li');
    const createRadio = document.createElement('input');
    const createLabel = document.createElement('label');
    
    
    //Setting attribute
    createRadio.setAttribute('type', 'radio');
    createLabel.setAttribute('for', `radio-${listArray.length}`);

    //setting id (using setAttribute works too)
    newList.id =`list-${listArray.length}`;
    createRadio.id = `radio-${listArray.length}`;

    //To get the specified radioId
    const arrayID = listArray.length;

    createLabel.textContent = input.value;

    createRadio.classList.add('mr-2');

    newList.appendChild(createRadio);
    listUl.appendChild(newList); 
    newList.appendChild(createLabel);

    listArray.push(input.value);
    
    // if (listArray === 0) {
    //     container.classList.remove('hidden');

    // }

    //Getting the radio button id and setting a variable
    const specifiedRadio = document.getElementById(`radio-${arrayID}`);
    const specifiedList = document.getElementById(`list-${arrayID}`);


   //removing list by getting the id of radio and list
    specifiedRadio.addEventListener('click', function() {
        completedLists.appendChild(specifiedList);
        specifiedRadio.remove();
        specifiedList.id = `completedtask-${arrayID}`
        specifiedList.style.textDecoration = 'line-through';

     
       //hide the "tasks for today" container if there are no lists
        if (listUl.childElementCount === 0) {
            container.classList.add('hidden');
        }


        if (completedLists.childElementCount !== 0)
        {
            completedTasks.classList.remove('hidden');
        }
        
    })


    
})



