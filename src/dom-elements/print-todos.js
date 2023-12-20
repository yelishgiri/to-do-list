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
