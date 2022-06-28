import { loadHomePage } from './loadHomePage';
import { loadContactPage } from './loadContactPage';
import { loadMenu } from './loadMenu';

const content = document.getElementById("content");


// append navbar
const navbar = document.createElement('div');
const navItems = document.createElement('ul');
let nav1 = document.createElement('li');
let nav1Link = document.createElement('a')
nav1Link.id = "home";
nav1Link.innerText = "Home";
nav1Link.href = "#";
nav1.appendChild(nav1Link);

let nav2 = document.createElement('li');
let nav2Link = document.createElement('a');
nav2Link.innerText = "Menu";
nav2Link.id = "menu";
nav2Link.href= "#";
nav2.appendChild(nav2Link);

let nav3 = document.createElement('li');
let nav3Link = document.createElement('a');
nav3Link.innerText = "Contact Us";
nav3Link.id = "contact";
nav3Link.href = "#";
nav3.appendChild(nav3Link);

navbar.appendChild(nav1);
navbar.appendChild(nav2);
navbar.appendChild(nav3);

content.appendChild(navbar);


// append container
const container = document.createElement('div');
container.classList.add("container");
let homePage = loadHomePage();
container.appendChild(homePage);
content.appendChild(container);


// append footer
let footer = document.createElement('div');
footer.innerText = "Created by Amanda Panda for the Odin Project";
content.appendChild(footer);

// add event listeners to nav bar items
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");
const contain = document.querySelector(".container");

home.addEventListener("click", () => {
    contain.removeChild(contain.firstElementChild);
    contain.appendChild(homePage);
});

menu.addEventListener("click", () => {
    contain.removeChild(contain.firstElementChild);
    let menuPage = loadMenu();
    contain.appendChild(menuPage);
});

contact.addEventListener("click", () => {
    contain.removeChild(contain.firstElementChild);
    let contactPage = loadContactPage();
    contain.appendChild(contactPage);
});
