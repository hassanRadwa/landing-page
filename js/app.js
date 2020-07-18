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
function anchorOnclick(evt) {
   //console.log(`is clicked`);
   const sectionId = evt.target.getAttribute('href').split("#")[1];
    const sections = document.getElementsByTagName('section');
    for (let section of sections){
        if (section.id === sectionId){
            section.className="your-active-class";
        }
        else {
            section.className="";
        }
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const sections = document.getElementsByTagName('section');
const myDocFrag = document.createDocumentFragment();
for (let section of sections) {
    const newLinkElement = document.createElement('a');
    newLinkElement.href = `#${section.getAttribute('id')}`;
    newLinkElement.innerText = section.getAttribute('data-nav');
    const newLiElement = document.createElement('li');
    newLiElement.appendChild(newLinkElement);
    //newElement.innerText = section.getAttribute('data-nav');
    newLiElement.className = 'menu__link';
    //console.log(section.getAttribute('data-nav'));
    myDocFrag.appendChild(newLiElement);
};
const navList=document.getElementById('navbar__list');
console.log('hi');
//myDocFrag.addEventListener('click', anchorOnclick);

navList.appendChild(myDocFrag);
navList.addEventListener("click",anchorOnclick);

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


