import { projects } from "../create-projects.js"
import { renderToDosToDom } from "./print-todos.js"



const sidebar = document.querySelector('.projects')
const content = document.querySelector('#content')
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
        console.log(eventListener)
        eventListener.forEach((list) => {
            list.addEventListener("click", (e) => {
            projects.forEach((object) => {
                if(e.target.className === object.name){
                    const div = document.createElement("div")
                    
                }   
        
        })
    
    })})
        }

}
    )

    // To remove if their exists task already on the screen
    
})


export { renderProjectToDOM }
