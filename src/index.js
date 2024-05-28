import './style.css';
import Icon from "./images/sailboat-boat-svgrepo-com.svg";
import { ToDo } from './ToDo.js';
import { Project } from './Project.js';

const projectsDiv = document.querySelector('.projects');

const newToDoBtn = document.querySelector('.newToDo');
const newProjectBtn = document.querySelector('.newProject');

newProjectBtn.addEventListener('click', () => {
    let newProject = new Project('Default');
    projectsDiv.appendChild(newProject);
})

let todo = new ToDo('mark', 'facebook project');
console.log(todo.display()); 
