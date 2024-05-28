import './style.css';
import { ToDo } from './ToDo.js';
import { Project } from './Project.js';
import { ModuleHandler } from './moduleHandler.js';
import { DomController } from './domController.js';

DomController();

let todo = new ToDo('mark', 'facebook project');
console.log(todo.display()); 
