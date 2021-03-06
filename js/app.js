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
        links.setAttribute("id", `link${i + 1}`);        // Add an ID for each link
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

// =============== Go Up function ===============
goUpBtn.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
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
let myFooter = document.querySelector('.page__footer');

let link_one = document.getElementById("link1");
let link_two = document.getElementById("link2");
let link_three = document.getElementById("link3");
let link_four = document.getElementById("link4");
let link_five = document.getElementById("link5");
let link_six = document.getElementById("link6");
let link_seven = document.getElementById("link7");

window.addEventListener("scroll", ()=> {

    console.log(sec3.offsetTop);
    console.log(sec4.offsetTop);
    console.log(window.scrollY);

    if (window.scrollY >= sec1.offsetTop && window.scrollY < sec2.offsetTop - 50) {
        sec1.classList.add("your-active-class");
        sec2.classList.remove("your-active-class");
        link_one.classList.add("active");
        link_six.classList.remove("active");
        link_five.classList.remove("active");
        link_four.classList.remove("active");
        link_three.classList.remove("active");
        link_two.classList.remove("active");
        link_seven.classList.remove("active");
    }
    else if (window.scrollY >= sec2.offsetTop && window.scrollY < sec3.offsetTop - 50) {
        sec1.classList.remove("your-active-class");
        sec2.classList.add("your-active-class");
        sec3.classList.remove("your-active-class");
        link_two.classList.add("active");
        link_six.classList.remove("active");
        link_five.classList.remove("active");
        link_four.classList.remove("active");
        link_three.classList.remove("active");
        link_seven.classList.remove("active");
        link_one.classList.remove("active");
    }
    else if (window.scrollY >= sec3.offsetTop && window.scrollY < sec4.offsetTop - 50) {
        sec2.classList.remove("your-active-class");
        sec3.classList.add("your-active-class");
        sec4.classList.remove("your-active-class");
        link_three.classList.add("active");
        link_six.classList.remove("active");
        link_five.classList.remove("active");
        link_four.classList.remove("active");
        link_seven.classList.remove("active");
        link_two.classList.remove("active");
        link_one.classList.remove("active");
    }
    else if (window.scrollY >= sec4.offsetTop && window.scrollY < sec5.offsetTop - 50) {
        sec3.classList.remove("your-active-class");
        sec4.classList.add("your-active-class");
        sec5.classList.remove("your-active-class");
        link_four.classList.add("active");
        link_six.classList.remove("active");
        link_five.classList.remove("active");
        link_seven.classList.remove("active");
        link_three.classList.remove("active");
        link_two.classList.remove("active");
        link_one.classList.remove("active");
    }
    else if (window.scrollY >= sec5.offsetTop && window.scrollY < sec6.offsetTop - 50) {
        sec4.classList.remove("your-active-class");
        sec5.classList.add("your-active-class");
        sec6.classList.remove("your-active-class");
        link_five.classList.add("active");
        link_six.classList.remove("active");
        link_seven.classList.remove("active");
        link_four.classList.remove("active");
        link_three.classList.remove("active");
        link_two.classList.remove("active");
        link_one.classList.remove("active");
    }
    else if (window.scrollY >= sec6.offsetTop && window.scrollY < sec7.offsetTop - 50) {
        sec5.classList.remove("your-active-class");
        sec6.classList.add("your-active-class");
        sec7.classList.remove("your-active-class");
        link_six.classList.add("active");
        link_seven.classList.remove("active");
        link_five.classList.remove("active");
        link_four.classList.remove("active");
        link_three.classList.remove("active");
        link_two.classList.remove("active");
        link_one.classList.remove("active");
    }
    else if (window.scrollY >= sec7.offsetTop && window.scrollY < myFooter.offsetTop - 50) {
        sec6.classList.remove("your-active-class");
        sec7.classList.add("your-active-class");
        link_seven.classList.add("active");
        link_six.classList.remove("active");
        link_five.classList.remove("active");
        link_four.classList.remove("active");
        link_three.classList.remove("active");
        link_two.classList.remove("active");
        link_one.classList.remove("active");
    }
});

