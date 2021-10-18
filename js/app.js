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

// Store section element in a variable 
const sections = document.querySelectorAll('section');
// Store navagation bar list in a variable 
const navBarList = document.getElementById('navbar__list');
// Store the Up button in a variable 
const upBtn = document.getElementById("to-top");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Create a function to create the navagation items 

const createNavMenu = () => {

    // Use DocumentFragment to append the new elements to the DOM tree for better performance 
    const fragment = document.createDocumentFragment();

    sections.forEach(function(section){

        // create new element and storing it in a new variable
        let newElement = document.createElement('li');

        // store the the id property of the sectione element by using Element.id
        let sectionID = section.id;

        // store the attribute  of section element by using HTMLElement.dataset.property  
        let sectionDataNav = section.dataset.nav;

        // Declare the content of the new element
        let menuContent =`<a href="#${sectionID}" class="menu__link">${sectionDataNav}</a>`;
        
        newElement.innerHTML = menuContent;
      
        fragment.appendChild(newElement);

        // Use scrollIntoView to scroll the element by listening to the event handler
        newElement.addEventListener('click', (event)=>{
            event.preventDefault();
            section.scrollIntoView({behavior: "smooth"});

        });  
            
    });
    
    navBarList.appendChild(fragment);
        
};

// Callback the function
createNavMenu();



// Create a function to detect whether the section is active or not
const activeSection =  () => {
    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop >= -200 && sectionTop <= 150){

            // Add class 'active' to section when near of viewport
            section.classList.add("your-active-class");
        }

       else{

           // Remove class 'active' to section when it's out of viewport
           section.classList.remove("your-active-class");
        }
	});
    
};


window.addEventListener('scroll',activeSection);

// Create an event handler to scroll to the top of the page

upBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  });

window.onscroll = ()=> {scrollFunction()};

// Create a function to display and hide the button according to the viewport
function scrollFunction() {
  if (document.documentElement.scrollTop > 1000) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}