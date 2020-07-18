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
    const liElements=document.getElementsByTagName('li');
    console.log(window.getComputedStyle(evt.target).background);
    //console.log(evt.target.getAttribute('style'));
    
    for (let liElement of liElements){
        if ( liElement.firstChild.getAttribute('href') === evt.target.getAttribute('href')){
            evt.target.className = 'active';
        }
        else {
            liElement.firstChild.className = 'menu__link';
        }
    }
    //const hoverStyle = document.querySelector('.navbar__menu .menu__link'),':hover');
    //evt.target.style = hoverStyle;
    
    //console.log(document.styleSheets[0]);
    //this.className = "active";
    //evt.target.style.background = '#333';
}

function setActive(e)
{
    //e.preventDefault();
    //console.log('hi');
    console.log(e.target);
    //e.target.setAttribute('style','background-color: red;')
    e.target.style.background = '#333';

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
    //newLiElement.className = 'menu__link';
    newLinkElement.className = 'menu__link';
    //console.log(section.getAttribute('data-nav'));
    myDocFrag.appendChild(newLiElement);
};
const navList=document.getElementById('navbar__list');


navList.appendChild(myDocFrag);
navList.addEventListener("click",anchorOnclick);
//navList.addEventListener('mouseover',setActive);


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


