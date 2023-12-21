import { projects } from "../create-projects.js"
import { renderToDosToDom } from "./print-todos.js"
import { callTaskSubmitButton } from "../todo-submit.js"




const sidebar = document.querySelector('.projects')
const container = document.querySelector('#container')
const renderProjectToDOM = (function() {
    
        
    const projectName = document.createElement('button')
    projectName.setAttribute('id','projectCards')
    projectName.setAttribute('class',`${projects[projects.length-1].name}`)
    projectName.textContent = `${projects[projects.length-1].name}`
    const projectDiv = document.createElement('div')
    projectDiv.setAttribute('id',`${projectName.textContent}`)   
    sidebar.appendChild(projectName);


    


    projects.forEach((object) => {
        
        if(document.contains(document.querySelector('#projectCards')))
        {
        const eventListener = document.querySelectorAll('#projectCards')
        eventListener.forEach((list) => {
            list.addEventListener("click", (e) => {
            projects.forEach((object) => {
                if(e.target.className === object.name){
                   if(document.contains(document.getElementById('content'))) 
                   {
                    document.getElementById('content').remove();
                   }

                   // For home or any projects container
                   const contentDiv = document.createElement('div')
                   contentDiv.setAttribute('id','content')
                   contentDiv.textContent = `${object.name}`
                   const indexForFolder = projects.length
                   const indexForTodo = object.todoItems.length
                   console.log(indexForFolder)
                   console.log(indexForTodo)
                   // For task to store div
                   const contentTask = document.createElement('div')
                   contentTask.setAttribute('class','contentTask')
                   contentDiv.appendChild(contentTask);
                    container.appendChild(contentDiv);
                    renderToDosToDom();
                

                                  
                }   
        
        })
    
    })})
        }

}
    )

    // To remove if their exists task already on the screen
    
})


export { renderProjectToDOM }
