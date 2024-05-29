import { ToDo } from "./ToDo";
import { Project } from "./Project";
import { initializeModal } from "./modal";
import { initializeToDoModal } from "./todoModal";

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

        currentProject.getTodos().forEach(todo => {
            const todoCard = document.createElement('div');
            todoCard.classList.add('todo-card');

            const delBtn = document.createElement('button');
            delBtn.classList.add('delTodo');
            delBtn.textContent = 'X';
            delBtn.addEventListener('click', () => {
                currentProject.removeTodoByTitle(todo.title);
                renderTodos();
            });

            const titleElement = document.createElement('h3');
            titleElement.textContent = todo.title;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = todo.description;

            const dateElement = document.createElement('p');
            dateElement.classList.add('todo-date');
            dateElement.textContent = `Due: ${todo.dueDate || 'No date set'}`;

            const priorityElement = document.createElement('p');
            priorityElement.classList.add('todo-priority');
            priorityElement.textContent = `Priority: ${todo.priority || 'No priority set'}`;

            todoCard.appendChild(delBtn);
            todoCard.appendChild(titleElement);
            todoCard.appendChild(descriptionElement);
            todoCard.appendChild(dateElement);
            todoCard.appendChild(priorityElement);

            todosDiv.appendChild(todoCard);
        });
    };

    newProjectBtn.addEventListener('click', async () => {
        const newProjectName = await initializeModal(); // Get project name from user input if needed
        if (newProjectName) {
            const newProject = new Project(newProjectName);
            projects.push(newProject); // Add new project to the projects array
            renderProjects();
        }
    });

    newToDoBtn.addEventListener('click', async () => {
        const todoData = await initializeToDoModal(); // Get todo details from user input
        if (todoData) {
            const { title, description, dueDate, priority } = todoData;
            const newTodo = new ToDo(title, description, dueDate, priority);
            currentProject.addTodo(newTodo); // Add todo to current project
            renderTodos();
        }
    });

    renderProjects(); // Initial rendering
    renderTodos(); // Initial rendering of todos for default project
};

export { DomController };
