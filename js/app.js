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
let mySections = document.querySelectorAll("section");

/**
 * Begin Main Functions
 * 
*/

// =============== build the nav ===============
(function buildNav() {
    for (let i = 0; i < mySections.length; i++) {
        let lists = document.createElement('li');        // Create li tag
        let links = document.createElement('a');         // create a tag
        let listContent = document.createTextNode(`Section${i + 1}`);  // Write word section followed by specific number
        links.classList.add("menu__link");               // Added menu__link class to all of a tags
        links.setAttribute("href", `#section${i + 1}`);  // Add href attr to a tags
        links.appendChild(listContent);                  // Add words that I wrote before and append them to a tags
        lists.appendChild(links);                        // Append a tags to li tags
        navBarList.appendChild(lists);                   // Append li tags to be into ul tag
    }
})();

// ==================================================================================

// =============== Show a BTN after a specific scroll to let the user go up ===============
let goUpBtn = document.querySelector(".go-up");

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 300) {
        goUpBtn.style.opacity = "1";
    }
    else {
        goUpBtn.style.opacity = "0";
    }
});




