import { loadHomePage } from './loadHomePage';
import { loadContactPage } from './loadContactPage';

const content = document.getElementById("content");

const container = document.createElement('div');
container.classList.add("container");


// append navbar
const navbar = document.createElement('div');
const navItems = document.createElement('ul');
let nav1 = document.createElement('li');
let nav1Link = document.createElement('a')
nav1Link.innerText = "Home";
nav1Link.href = "#";
nav1.appendChild(nav1Link);

let nav2 = document.createElement('li');
let nav2Link = document.createElement('a');
nav2Link.innerText = "Menu";
nav2Link.href= "#";
nav2.appendChild(nav2Link);

let nav3 = document.createElement('li');
let nav3Link = document.createElement('a');
nav3Link.innerText = "Contact Us";
nav3Link.href = "#";
nav3.appendChild(nav3Link);

navbar.appendChild(nav1);
navbar.appendChild(nav2);
navbar.appendChild(nav3);

content.appendChild(navbar);


// append container
let element = loadHomePage();
content.appendChild(element);




// append footer
let footer = document.createElement('div');
footer.innerText = "Created by Amanda Panda for the Odin Project";
content.appendChild(footer);


console.log("success");