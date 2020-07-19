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
let sectionArray=[];
let doScroll = 1;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function anchorOnclick(evt) {
   activeSectionId = evt.target.getAttribute('href').split("#")[1];
   console.log(`anchorOnclick: activeSectionId: ${activeSectionId}`);
   // add circles effect
    addCirclesEffect();
    const liElements=document.getElementsByTagName('li');
    //console.log(window.getComputedStyle(evt.target).background);
    //console.log(evt.target.getAttribute('style'));
    //window.removeEventListener('scroll',scrollHandler);
    doScroll = 0;
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
    console.log(`anchorOnclick: 1 doScroll: ${doScroll}`);
    
    //console.log(window.href);
    //const hoverStyle = document.querySelector('.navbar__menu .menu__link'),':hover');
    //evt.target.style = hoverStyle;
    
    //console.log(document.styleSheets[0]);
    //this.className = "active";
    //evt.target.style.background = '#333';
}
function anchorOnclick2(evt) {
   console.log(`anchorOnclick2: false activeSectionId: ${activeSectionId}`);
//    doScroll = 1;
   //window.addEventListener('scroll',scrollHandler);
}
function enablescroll()
{
    console.log(`in mouse up`);
    window.addEventListener('scroll',scrollHandler);
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
    console.log(`setDoScroll: 1 doScroll: ${doScroll}`);
    doScroll = 1;
    console.log(`setDoScroll: 2 doScroll: ${doScroll}`);
}

function scrollHandler(evt)
{
    if (doScroll == 1)
    {
        let fromTop = Math.ceil(window.scrollY);
        let secMargin = 0;
        console.log(`scrollHandler: fromTop: ${fromTop}`);
        const liElements=document.getElementsByTagName('li');
        console.log(`scrollHandler: activeSectionId: ${activeSectionId}`);
        //get active section id after reload
        if (activeSectionId == ''){
            // activeSectionId = 'section1';
            const sectionsTmp = document.getElementsByTagName('section');
            for (let sectionTmp of sectionsTmp){
                secMargin = Math.floor(sectionTmp.offsetHeight * 0.5);
                console.log(`sectionId: ${sectionTmp.id}`);
                console.log(`scrollHandler: sectionTmp.offsetTop: ${sectionTmp.offsetTop}`);
                console.log(`scrollHandler: sectionTmp_end: ${sectionTmp.offsetTop + sectionTmp.offsetHeight}`);
                if (
                    sectionTmp.offsetTop - secMargin <= fromTop &&
                    (sectionTmp.offsetTop + sectionTmp.offsetHeight - secMargin) > fromTop
                )
                {
                    activeSectionId = sectionTmp.id;
                    secAncor = `#${activeSectionId}`;
                    console.log(`scrollHandler: activeSectionId: ${activeSectionId}`);
                    console.log(`scrollHandler: secAncor: ${secAncor}`);
                    break;
                }
            }
        }
        if (activeSectionId != ''){
        let currSection = document.getElementById(activeSectionId);
        let currSecId=parseInt(activeSectionId.split('section')[1]);
        secMargin = Math.floor(currSection.offsetHeight * 0.5);
        console.log(`scrollHandler: currSecId: ${currSecId}`);
        console.log(`scrollHandler: currSection.offsetTop: ${currSection.offsetTop}`);
        console.log(`scrollHandler: currSection_end: ${currSection.offsetTop + currSection.offsetHeight - secMargin}`);
        let newSecId;
        if (
            currSection.offsetTop - secMargin <= fromTop &&
            currSection.offsetTop + currSection.offsetHeight - secMargin > fromTop
        )
        { // in the same section
            liElements[currSecId-1].firstChild.className = 'active';
            secAncor = `#${activeSectionId}`;
            console.log(`scrollHandler: currSecId: ${currSecId}`);
            console.log(`scrollHandler: activeSectionId: ${activeSectionId}`);
        }
        else{ // section changed up or down
            
            // get new section
            if (fromTop < currSection.offsetTop - secMargin) { // scroll up
                console.log('scrollHandler: scroll up');
                newSecId = currSecId - 1;
                if (newSecId - 1 >= 0) {
                    liElements[newSecId-1].firstChild.className = 'active';
                    activeSectionId = `section${newSecId}`;
                    secAncor = `#${activeSectionId}`;
                    console.log(`scrollHandler: newSecId: ${newSecId}`);
                    console.log(`scrollHandler: activeSectionId: ${activeSectionId}`);
                }
                else{ // reached the top of the page
                    secAncor = '';
                }
            }
            else{ // scroll down
                console.log('scrollHandler: scroll down');
                newSecId = currSecId + 1;
                if (newSecId - 1 < liElements.length) {
                    liElements[newSecId-1].firstChild.className = 'active';
                    activeSectionId = `section${newSecId}`;
                    secAncor = `#${activeSectionId}`;
                    console.log(`scrollHandler: newSecId: ${newSecId}`);
                    console.log(`scrollHandler: activeSectionId: ${activeSectionId}`);
                }
                else{ // reached the end of the page
                    secAncor = '';
                }
            }
            liElements[currSecId-1].firstChild.className = 'menu__link';
        }
        }
        console.log(`----scrollHandler: activeSectionId: ${activeSectionId}`);
        console.log(`----scrollHandler: secAncor: ${secAncor}`);
        console.log(`----scrollHandler: pageUrl: ${pageUrl}`);
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
console.log(navList.childNodes.length);
if (navList.childNodes.length === 0)
{
    const sections = document.getElementsByTagName('section');
    console.log(sections.length);
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
    }
    
    navList.appendChild(myDocFrag);
    navList.addEventListener("click",anchorOnclick,true);
    //navList.addEventListener("click",anchorOnclick2,false);
    //navList.addEventListener('mousedown',enablescroll);
    //navList.addEventListener('mouseover',setActive);
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


