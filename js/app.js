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
let navBarList = document.getElementById('navbar__list');  // The ul tag
let mySections = document.querySelectorAll("section");   // All Sections
let goUpBtn = document.querySelector(".go-up");   // Go Up BTN


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
window.addEventListener("scroll", ()=> {
    if (window.scrollY > 300) {
        goUpBtn.style.opacity = "1";
    }
    else {
        goUpBtn.style.opacity = "0";
    }
});

// ==================================================================================
// =============== Section Highlighted via bubble ===============
let sec1 = document.getElementById("section1");
let sec2 = document.getElementById("section2");
let sec3 = document.getElementById("section3");
let sec4 = document.getElementById("section4");
let sec5 = document.getElementById("section5");
let sec6 = document.getElementById("section6");
let sec7 = document.getElementById("section7");

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 300 && window.scrollY < 700 ) {
        console.log("Section one is here");
    }
    else if (window.scrollY > 860 && window.scrollY < 1280) {
        sec1.classList.remove("your-active-class");
        sec2.classList.add("your-active-class");
    }
    else if (window.scrollY > 1420 && window.scrollY < 1950) {
        sec2.classList.remove("your-active-class");
        sec3.classList.add("your-active-class");
    }
    else if (window.scrollY > 2040 && window.scrollY < 2450) {
        sec3.classList.remove("your-active-class");
        sec4.classList.add("your-active-class");
    }
    else if (window.scrollY > 2600 && window.scrollY < 3100) {
        sec4.classList.remove("your-active-class");
        sec5.classList.add("your-active-class");
    }
    else if (window.scrollY > 3240 && window.scrollY < 3660) {
        sec5.classList.remove("your-active-class");
        sec6.classList.add("your-active-class");
    }
    else if (window.scrollY > 3770 && window.scrollY < 4100) {
        sec6.classList.remove("your-active-class");
        sec7.classList.add("your-active-class");
    }
});

