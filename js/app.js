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
let activeSectionId='';
let secAncor = '';
let pageUrl = window.location.href.split("#")[0];
let doScroll = 1;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function anchorOnclick(evt) {
   activeSectionId = evt.target.getAttribute('href').split("#")[1];
   // add circles effect
    addCirclesEffect();
    const liElements=document.getElementsByTagName('li');
    doScroll = 0; // disable scroll with on click
    const myDocFrag = document.createDocumentFragment();
    // change background on click and stay
    for (let liElement of liElements){
        if ( liElement.firstChild.getAttribute('href') === evt.target.getAttribute('href')){
            evt.target.className = 'active';
        }
        else {
            liElement.firstChild.className = 'menu__link';
        }
    }
}

function addCirclesEffect() {
    const sections = document.getElementsByTagName('section');
    for (let section of sections) {
        if (section.id === activeSectionId) {
            section.className = "your-active-class";
        }
        else {
            section.className = "";
        }
    }
}

function setDoScroll()
{
    doScroll = 1;
}

function scrollHandler(evt)
{
    if (doScroll == 1)
    {
        let fromTop = Math.ceil(window.scrollY);
        let secMargin = 0;
        const liElements=document.getElementsByTagName('li');
        //get active section id after reload
        if (activeSectionId == ''){
            // activeSectionId = 'section1';
            const sectionsTmp = document.getElementsByTagName('section');
            for (let sectionTmp of sectionsTmp){
                secMargin = Math.floor(sectionTmp.offsetHeight * 0.5);
                if (
                    sectionTmp.offsetTop - secMargin <= fromTop &&
                    (sectionTmp.offsetTop + sectionTmp.offsetHeight - secMargin) > fromTop
                )
                {
                    activeSectionId = sectionTmp.id;
                    secAncor = `#${activeSectionId}`;
                    break;
                }
            }
        }
        if (activeSectionId != ''){
        let currSection = document.getElementById(activeSectionId);
        let currSecId=parseInt(activeSectionId.split('section')[1]);
        secMargin = Math.floor(currSection.offsetHeight * 0.5);
        let newSecId;
        if (
            currSection.offsetTop - secMargin <= fromTop &&
            currSection.offsetTop + currSection.offsetHeight - secMargin > fromTop
        )
        { // in the same section
            liElements[currSecId-1].firstChild.className = 'active';
            secAncor = `#${activeSectionId}`;
        }
        else{ // section changed up or down
            
            // get new section
            if (fromTop < currSection.offsetTop - secMargin) { // scroll up
                newSecId = currSecId - 1;
                if (newSecId - 1 >= 0) {
                    liElements[newSecId-1].firstChild.className = 'active';
                    activeSectionId = `section${newSecId}`;
                    secAncor = `#${activeSectionId}`;
                }
                else{ // reached the top of the page
                    secAncor = '';
                }
            }
            else{ // scroll down
                newSecId = currSecId + 1;
                if (newSecId - 1 < liElements.length) {
                    liElements[newSecId-1].firstChild.className = 'active';
                    activeSectionId = `section${newSecId}`;
                    secAncor = `#${activeSectionId}`;
                }
                else{ // reached the end of the page
                    secAncor = '';
                }
            }
            liElements[currSecId-1].firstChild.className = 'menu__link';
        }
        }
        // change section ID in the URL
        window.history.pushState("", "", `${pageUrl}${secAncor}`);
        // add circles effect
        addCirclesEffect();
    }

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


const navList=document.getElementById('navbar__list');
if (navList.childNodes.length === 0)
{
    const sections = document.getElementsByTagName('section');
    const myDocFrag = document.createDocumentFragment();
    for (let section of sections) {
        const newLinkElement = document.createElement('a');
        newLinkElement.href = `#${section.getAttribute('id')}`;
        newLinkElement.innerText = section.getAttribute('data-nav');
        const newLiElement = document.createElement('li');
        newLiElement.appendChild(newLinkElement);
        //newElement.innerText = section.getAttribute('data-nav');
        newLinkElement.className = 'menu__link';
        myDocFrag.appendChild(newLiElement);
    }
    
    navList.appendChild(myDocFrag);
    navList.addEventListener("click",anchorOnclick);
    //const mainTag=document.getElementsByTagName('main')[0];
    window.addEventListener('scroll',scrollHandler);
    window.addEventListener('wheel',setDoScroll);
    window.addEventListener('keypress',setDoScroll);
    window.addEventListener("mousedown", setDoScroll);
}
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


