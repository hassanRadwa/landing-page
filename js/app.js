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
const headers = document.getElementsByTagName('h2');
//const headers = sections.get('h2');

//const myDocFrag = document.createDocumentFragment();
for (let header of headers) {
    //const newElement = document.createElement('li');
    //newElement.innerText = sections[i].getElementsByTagName('h2').innerText;
    console.log(header.innerText);
    //fragment.appendChild(newElement);
};

//document.body.appendChild(fragment);


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


