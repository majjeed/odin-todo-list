import { ToDo } from "./ToDo";
import { Project } from "./Project";

const DomController = () => {
    const newToDoBtn = document.querySelector('.newToDo');
    const newProjectBtn = document.querySelector('.newProject');
    const projectsDiv = document.querySelector('.projects');
    const todosDiv = document.querySelector('.todos');

    let projects = []; // Array to hold project instances

    const defaultProject = new Project('Default');
    projects.push(defaultProject); // Add default project to the projects array

    let currentProject = projects[0]; //the project that we will use to render its todo items

    const renderProjects = () => {
        projectsDiv.innerHTML = '';

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');

            const projectNameElement = document.createElement('h3');
            projectNameElement.textContent = project.name;
            projectElement.appendChild(projectNameElement);

            projectsDiv.appendChild(projectElement);
        });
    };

    const renderTodos = () => {
        todosDiv.innerHTML = '';

        const projectElementTodo = document.createElement('div');
        projectElementTodo.classList.add('todo');

        const todoListElement = document.createElement('ul');
        currentProject.getTodos().forEach(todo => {
            const todoItemElement = document.createElement('li');
            todoItemElement.textContent = todo.display();
            todoListElement.appendChild(todoItemElement);
        });
        projectElementTodo.appendChild(todoListElement);

        todosDiv.appendChild(projectElementTodo);
    }

    newProjectBtn.addEventListener('click', () => {
        const newProjectName = 'New Project'; // Get project name from user input if needed
        const newProject = new Project(newProjectName);
        projects.push(newProject); // Add new project to the projects array
        renderProjects();
        renderTodos();
    });

    newToDoBtn.addEventListener('click', () => {
        const title = 'New Todo'; // Get todo details from user input if needed
        const description = 'Todo description';
        const dueDate = '2024-05-29';
        const priority = 'High';
        const newTodo = new ToDo(title, description, dueDate, priority);
        defaultProject.addTodo(newTodo); // Add todo to default project for now
        renderProjects();
        renderTodos();
    });

    renderProjects(); // Initial rendering
    renderTodos();
};

export { DomController };
