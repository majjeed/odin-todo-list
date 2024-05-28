import './style.css';
import Icon from "./images/sailboat-boat-svgrepo-com.svg";
import { ToDo } from './ToDo.js';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script

    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    //element.appendChild(myIcon);

    // const logo = document.querySelector('.logo-img');
    // logo.src = Icon;
    let todo = new ToDo('mark', 'facebook project');
    console.log(todo.display()); 
    window.ToDo = ToDo;
    return element;
}

document.body.appendChild(component());

