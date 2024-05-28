import { ToDo } from "./ToDo";
import { Project } from "./Project";
import { initializeModal } from "./modal";

const DomController = () => {
    const newToDoBtn = document.querySelector('.newToDo');
    const newProjectBtn = document.querySelector('.newProject');
    const projectsDiv = document.querySelector('.projects');
    const todosDiv = document.querySelector('.todos');

    let projects = []; // Array to hold project instances

    const defaultProject = new Project('Default');
    projects.push(defaultProject); // Add default project to the projects array

    let currentProject = defaultProject; // The project whose todos are currently being displayed

    const renderProjects = () => {
        projectsDiv.innerHTML = '';

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.textContent = project.name;

            // Add click event listener to switch current project
            projectElement.addEventListener('click', () => {
                currentProject = project;
                renderTodos();
            });

            projectsDiv.appendChild(projectElement);
        });
    };

    const renderTodos = () => {
        todosDiv.innerHTML = '';

        const todoListElement = document.createElement('ul');
        currentProject.getTodos().forEach(todo => {
            const todoItemElement = document.createElement('li');
            todoItemElement.textContent = todo.display();
            todoListElement.appendChild(todoItemElement);
        });

        todosDiv.appendChild(todoListElement);
    };

    newProjectBtn.addEventListener('click', () => {
        initializeModal();
        const newProjectName = 'New Project'; // Get project name from user input if needed
        const newProject = new Project(newProjectName);
        projects.push(newProject); // Add new project to the projects array
        renderProjects();
    });

    newToDoBtn.addEventListener('click', () => {
        const title = 'New Todo'; // Get todo details from user input if needed
        const description = 'Todo description';
        const dueDate = '2024-05-29';
        const priority = 'High';
        const newTodo = new ToDo(title, description, dueDate, priority);
        currentProject.addTodo(newTodo); // Add todo to current project
        renderTodos();
    });

    renderProjects(); // Initial rendering
    renderTodos(); // Initial rendering of todos for default project
};

export { DomController };
