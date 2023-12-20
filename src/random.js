



import { projects } from "../create-projects.js"
import { renderToDosToDom } from "./print-todos.js"



const sidebar = document.querySelector('.projects')
const content = document.querySelector('#content')
const renderProjectToDOM = (function() {
    
        
    const projectName = document.createElement('button')
    projectName.setAttribute('class','projectCards')
    projectName.textContent = `${projects[projects.length-1].name}`
    const projectDiv = document.createElement('div')
    projectDiv.setAttribute('id',`${projectName.textContent}`)   
    sidebar.appendChild(projectName);


    


    projects.forEach((object) => {
        
    const eventHandlerForDynamicButton = function(){
        projectName.addEventListener('click', () => {
          const div = document.createElement('div')
          content.appendChild(div)
          div.setAttribute('id',`${object.name}`)
          renderToDosToDom();
        })
    }

    eventHandlerForDynamicButton();
}
    )

    // To remove if their exists task already on the screen
    
})


export { renderProjectToDOM }


import { addTodo } from "./create-to-do.js";
import { projects } from "./create-projects.js";


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
        addTodo(taskName.value,taskDescription.value,taskDueDate.value,taskPriority.value,taskNotes.value)

    })
    

});

export { callTaskSubmitButton }


import { projects } from "../create-projects.js";

const renderToDosToDom = (function() {
    projects.forEach((object) => {
        if(document.contains(document.getElementById(`#${object.name}`))){
            document.getElementById(`#${object.name}`).remove();
            console.log()
        }

        
            const appendDiv = document.querySelector(`#${object.name}`)
            object.todoItems.forEach((object) => {
                if(document.contains(document.getElementById('divContent'))){
                    document.getElementById('divContent').remove()
                }
                    
                    const div = document.createElement('div')
                    div.setAttribute("id","divContent")
                    const divTask = document.createElement('div')
                    const divDescription = document.createElement('div')
                    const divDuedate = document.createElement('div')
                    const divPriority = document.createElement('div')
                    const divNotes = document.createElement('div')
                    divTask.textContent = `Task: ${object.item}`
                    divDescription.textContent = `Description: ${object.description}`
                    divDuedate.textContent = `DueDate: ${object.dueDate}`
                    divPriority.textContent = `Priority: ${object.priority}`
                    divNotes.textContent = `Notes: ${object.notes}`
                    div.append(divTask,divDescription,divDuedate,divPriority,divNotes)
                    appendDiv.appendChild(div) 
                  
        }
        )
        }
    )

})


export { renderToDosToDom }









