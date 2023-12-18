import './style.css'
import { rendorTaskDialogBox } from './dom-elements/task-dialog-box.js'
import { renderProjectDialogBox } from './dom-elements/project-dialog-box.js';
import { callProjectSubmitButton } from './dom-elements/project-submit.js';






(function renderDomElements(){
    renderProjectDialogBox();
    rendorTaskDialogBox();
    callProjectSubmitButton();
})()



