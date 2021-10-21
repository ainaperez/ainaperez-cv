/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


/* ----- Burger Menu function ------*/

const burger = document.querySelector(".burger"); 
const menu = document.querySelector(".nav-ul");
const navLink = document.querySelectorAll(".nav-li");

//open menú on burger click 

burger.addEventListener("click", burgerToggle); 

function burgerToggle(){
  menu.classList.toggle("active");
  burger.classList.toggle("active");
}

//close menú on Link click

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  menu.classList.remove("active");
  burger.classList.remove("active");  
}


/* ----- Circle rotation on scroll ------ */

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  const circle = document.querySelector(".circle-img");
  circle.style.transform = "rotate(" + window.pageYOffset/6 + "deg)";
}
