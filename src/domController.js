import { ToDo } from "./ToDo";
import { Project } from "./Project";

const DomController = () => {

    const newToDoBtn = document.querySelector('.newToDo');
    const newProjectBtn = document.querySelector('.newProject');

    newProjectBtn.addEventListener('click', () => {
        let newProjectName = new Project('Default');
        let newProject = document.createElement('p');
        newProject.textContent = `${newProjectName.name}`;
        const projectsDiv = document.querySelector('.projects');
        projectsDiv.appendChild(newProject);
    });


    newToDoBtn.addEventListener('click', () => {
        let newToDo = new ToDo('Lenovo', 'Arch Linux');

    });
}

export { DomController };