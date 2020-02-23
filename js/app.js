/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildTheNav = () => {
  const sections = document.querySelectorAll('section');
  const nav = document.getElementById('navbar__list');

  for (let i = 0; i < sections.length; i++) {
    const navItem = document.createElement('li');
    let section = sections[i];
    let sectionLabel = section.getElementsByTagName('h2')[0].innerText;
    navItem.innerHTML = `<div data-id=${section.id} class="menu__link">${sectionLabel}</div>`;
    navItem.style.cursor = "pointer";
    nav.appendChild(navItem);
  }
}

buildTheNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

