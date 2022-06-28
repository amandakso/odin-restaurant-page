import { loadHomePage } from './loadHomePage';

let element = loadHomePage();
const content = document.getElementById("content");
content.appendChild(element);

console.log("success");