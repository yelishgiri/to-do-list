import './style.css'
import { rendorTaskDialogBox } from './dom-elements/task-dialog-box.js'
import { renderProjectDialogBox } from './dom-elements/project-dialog-box.js';
import { callProjectSubmitButton } from './project-submit.js';
import { callTaskSubmitButton } from './todo-submit.js'

import { projects } from './create-projects.js';



(function renderDomElements(){
    renderProjectDialogBox();
    rendorTaskDialogBox();
    callProjectSubmitButton();
    callTaskSubmitButton();
 
})()



