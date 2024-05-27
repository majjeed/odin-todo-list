import './style.css';
//import html from './index.html';
import Icon from "./images/sailboat-boat-svgrepo-com.svg";

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script

    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    // const logo = document.querySelector('.logo-img');
    // logo.src = Icon;

    return element;
}

//document.body.appendChild(component());