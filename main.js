const sectionTask = document.querySelector('.task');
const listaTask = document.querySelector('.lista-task');
const liTask = document.querySelector('.item-lista-task');
const buttonAdd = document.querySelector('.button-add-task');
const buttonChecked = document.querySelector('.button-check-task');
const task = document.querySelector('.task-item');
const inputTask = document.querySelector('.input-task');
const arrayTask = [];
let contador = 0;

function Task(){

    var listTask = document.createElement('li');
    listTask.classList.add('item-lista-task');
    listTask.setAttribute('id', `${contador}`)
    listaTask.appendChild(listTask);

    var inputCheck = document.createElement('input');
    inputCheck.classList.add('button-check-task');
    inputCheck.setAttribute('type' , 'checkbox')
    listTask.appendChild(inputCheck);

    var itemTask = document.createElement('p');
    itemTask.classList.add('task-item');
    listTask.appendChild(itemTask);

    var createButton = document.createElement('button');
    createButton.classList.add('button-remove-task');
    createButton.setAttribute('id', `${contador}`)
    createButton.onclick = function (event){
        removeTask(event)
    };
    listTask.appendChild(createButton);

    var imageButton = document.createElement('i');
    imageButton.classList.add('fa-solid') //ganbiarra pois o icone que estava usando contem um nome separado por "espaço" e com isso o JS não aceitar a informação. Por isso a solução foi duplicar a classe adiciona em duas partes. nome original "fa-solid fa-trash"
    imageButton.classList.add('fa-trash')
    imageButton.setAttribute('id', `${contador}`)
    createButton.appendChild(imageButton);

    var userTask = inputTask.value;
    itemTask.innerHTML = userTask;

}

function addTask(){
    buttonAdd.addEventListener('click', () =>{
        var taskUser = inputTask.value;
        contador = contador+1;
        arrayTask.push(taskUser);
        Task();
    })
}


function removeTask(evento){
    const element = document.getElementById(evento.target.id)
    element.remove();
    contador--;
    // console.log(buttonRemove)
    // buttonRemove.addEventListener('click', (event) => {
    //     console.log(event.target.id)
    // })
}

// function removeTask(){
//     var valueTask = document.querySelector('.task')
    
//     if(valueTask.value =! ''){
//         buttonRemove.addEventListener('click', () => {
//             alert('Teste')
//         })
//     }
//    }

addTask();



