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
let activeSectionId='section1';
let sectionArray=[];
const sectionsTmp = document.getElementsByTagName('section');
for (let sectionTmp of sectionsTmp){
    console.log(`sectionId: ${sectionTmp.id}`);
    sectionArray.push({ name: `${sectionTmp.id}`, value: [sectionTmp.offsetTop, sectionTmp.offsetTop + sectionTmp.offsetHeight] });
    //sectionArray.push({ name: `${sectionTmp.id}_start`, value: sectionTmp.offsetTop});
    //sectionArray.push({ name: `${sectionTmp.id}_end`, value: sectionTmp.offsetTop + sectionTmp.offsetHeight });
}


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function anchorOnclick(evt) {
    
   activeSectionId = evt.target.getAttribute('href').split("#")[1];
   
   // add circles effect
    const sections = document.getElementsByTagName('section');
    for (let section of sections){
        if (section.id === activeSectionId){
            section.className="your-active-class";
        }
        else {
            section.className="";
        }
    }
    const liElements=document.getElementsByTagName('li');
    //console.log(window.getComputedStyle(evt.target).background);
    //console.log(evt.target.getAttribute('style'));
    
    // change background on click and stay
    for (let liElement of liElements){
        if ( liElement.firstChild.getAttribute('href') === evt.target.getAttribute('href')){
            evt.target.className = 'active';
        }
        else {
            liElement.firstChild.className = 'menu__link';
        }
    }
    //console.log(window.href);
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

function scrollHandler(evt)
{
    let fromTop = window.scrollY;
    // let section = document.getElementById(activeSectionId);
    const liElements=document.getElementsByTagName('li');
    // let newSecId=parseInt(activeSectionId.split('section')[1]);
    // newSecId -= 1; // subtract one to start woth zero index
    // console.log(`activeSectionId: ${activeSectionId}`);
    // console.log(`newSecId: ${newSecId}`);
    // if (
    //     section.offsetTop <= fromTop &&
    //     section.offsetTop + section.offsetHeight > fromTop
    //   )
    //   {
    //     //section.scrollIntoView();
    //     liElements[newSecId].firstChild.className = 'active';
    //   }
    // else{
    //     newSecId += 2;
    //     console.log(`else: newSecId: ${newSecId}`);
    //     activeSectionId = `section${newSecId}`;
    //     liElements[newSecId].firstChild.className = 'menu__link';

    // }
    //console.log(section);
    for (let idx=0; idx<liElements.length; idx++) {
        if (
            sectionArray[idx].value[0] <= fromTop &&
            sectionArray[idx].value[1] > fromTop
            )
        {
            liElements[idx].firstChild.className = 'active';
        }
        else
        {
            liElements[idx].firstChild.className = 'menu__link';
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
    //newLiElement.className = 'menu__link';
    newLinkElement.className = 'menu__link';
    //console.log(section.getAttribute('data-nav'));
    myDocFrag.appendChild(newLiElement);
};
const navList=document.getElementById('navbar__list');


navList.appendChild(myDocFrag);
navList.addEventListener("click",anchorOnclick);
//navList.addEventListener('mouseover',setActive);
//const mainTag=document.getElementsByTagName('main')[0];
window.addEventListener('scroll',scrollHandler);

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


