import { projects } from "../create-projects.js"
import { renderToDosToDom } from "./print-todos.js"



const sidebar = document.querySelector('.projects')
const content = document.querySelector('#content')
const renderProjectToDOM = (function() {
    projects.forEach((object) => {
    const projectName = document.createElement('button')
    projectName.setAttribute('class','projectCards')
    projectName.textContent = `${projects[projects.length-1].name}`
    const projectDiv = document.createElement('div')
    projectDiv.setAttribute('id',`${projectName.textContent}`)   
    sidebar.appendChild(projectName);


    



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
