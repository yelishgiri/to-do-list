import { addTodo } from "./create-to-do.js";


const callTaskSubmitButton = (function() {
    
    const dialogTask = document.getElementById('formForToDo') 
    const taskDialogSubmit = document.querySelector('.submitTask')

    const taskName = document.querySelector('#taskName')
    const taskDescription = document.querySelector('#taskDescription')
    const taskDueDate = document.querySelector('#taskDueDate')
    const taskPriority = document.querySelector('#taskPriority')
    const taskNotes = document.querySelector('#taskNotes')

    taskDialogSubmit.addEventListener("click",(event) => {
        event.preventDefault();
        dialogTask.close();
        addTodo("hello","hello","hello","hehe","hehe")
    })
    

});

export { callTaskSubmitButton }