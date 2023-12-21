import { projects } from "../create-projects.js";


const renderToDosToDom = (function() {
    projects.forEach((object) => {

        const divContent = document.querySelector('#content')
                if(object.name === divContent.textContent){
                const appendDiv = document.querySelector('.contentTask')
                console.log(appendDiv)
                object.todoItems.forEach((object) => {
                    
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
        }}
    )

})


export { renderToDosToDom }
