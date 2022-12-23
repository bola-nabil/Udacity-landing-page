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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
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
// global variables
const navbarList = document.getElementById('navbar__list');
let sectionsProject = Array.from(document.querySelectorAll('section'));
const allSections = document.querySelectorAll('section')


// create li element in navbar section
function createList() {
    for( sections of sectionsProject ) {
        createListItem = document.createElement('li');
        createListItem.innerHTML = `<a href="#${sections.id}" data-nav="${sections.id}" class="menu__link" > ${sections.dataset.nav}</a>`;
        navbarList.appendChild(createListItem);
    }
}
createList();

// create active class
function makeActive() {
    allSections.forEach( function(active)  {
        let activeLink = navbarList.querySelector(`[data-nav=${active.id}]`);
        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) {
            active.classList.add('your-active-class');
            activeLink.classList.add('active-link');
        }
        else {
            active.classList.remove('your-active-class')
            activeLink.classList.remove('active-link');
        }
    });
}

document.addEventListener('scroll', function() {
    makeActive();
});


function smoothScroll() {
    navbarList.addEventListener('click', (sec) => {
        sec.preventDefault()
        if(sec.target.dataset.nav) {
            document.getElementById(`${sec.target.dataset.nav}`)
            .scrollIntoView({behavior: 'smooth'});
        }
    });
}

smoothScroll();
