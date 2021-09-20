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

let navBarList = document.getElementById('navbar__list');
// let mySections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function helper() {

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let links = `
            <li><a href="#section1" class="menu__link">Section1</a></li>
            <li><a href="#section2" class="menu__link">Section2</a></li>
            <li><a href="#section3" class="menu__link">Section3</a></li>
            <li><a href="#section4" class="menu__link">Section4</a></li>
            <li><a href="#section5" class="menu__link">Section5</a></li>
            <li><a href="#section6" class="menu__link">Section6</a></li>
            <li><a href="#section7" class="menu__link">Section7</a></li>
            `;

navBarList.innerHTML = links;



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


