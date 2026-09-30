//social media, e commerce, todo examples of crud operations

document.addEventListener('DOMContentLoaded', () =>{

const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach(task => renderTasks(task));

addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim() //trim() extra space is removed
    if(taskText == "") return;

    const newTask = {
        id: Date.now(), //gives a unique id based on date
        text: taskText,
        completed: false
    }
    tasks.push(newTask)
    saveTasks();
    renderTasks();
    todoInput.value = "" //clear the input
    console.log(tasks);
    
});
//pickup task from local storage
function renderTasks(task){
const li = document.createElement('li')
li.setAttribute('data-id', task.id)
if(task.completed) li.classList.add("completed");
li.innerHTML = `
<span>${task.text}</span>
<button> delete </button>
`;
li.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') return
    task.completed = !task.completed
    li.classList.toggle('complete')
    saveTasks()
});

li.querySelector('button').addEventListener('click', (e) => {
    e.stopPropagation() //prevent toggle from firing
    tasks = tasks.filter(t => t.id !== task.id)
    li.remove()
    saveTasks();
})

todoList.appendChild(li);
}
 //local storage gives you API, browser has an API to directly access this, all of JS has an access to this one
//anything done inside array, whenever we manipulate even a slightest of the thing, that needs to be saved in the localstorage

 function saveTasks (){
localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});
