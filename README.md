# Landing Page Project

## Udacity Front End Web Development Professional Nanodegree Program

#### Landing page project is built by using :

- HTML
- CSS
- JavaScript

** The purpose of this landing page is appending dynamically added data to the DOM, and how javascript can improve the usability of a static site.

## Features

- Add new elements to HTML 
- Manipulate the DOM using JavaScript
- Add new styles to the element using CSS

## Description

Landing page is a multi-section landing page. Each section was built by HTML.
I managed to convert the page from being static to a dynamic one, with a dynamically updating navigational menu based on the amount of content that is added to the page.

## Development

I added new sections to HTML structure. I added new styles to CSS file according to the new elements.
I created a function "createNavMenu" to create a new "li" element for each section dynamically.
With loop on the sections list created, I added "li" elements with each iteration.
I appended the new elements to the DOM tree by using DocumentFragment for better performance, so there's no reflow and repaint cost while adding the elements.
I added an event handler to respond to each section being clicked.
I used "scrollIntoView" method to scroll smoothly to each section being clicked in the navigation bar.
I created "activeSection" function to detect which section is being active in the Viewport and remove it while it is not active.
I created a button to scroll to the top point of the page.
I added an event handler to respond to the button when it's clicked.

## Installation
Landing page project requires a modern browser that supports JavaScript.


## Sources

Building landing page by using a number of open source projects to work properly:

https://developer.mozilla.org/en-US/
https://www.w3schools.com/js/default.asp
https://stackoverflow.com/
https://nfpdiscussions.udacity.com/
https://eslint.org/demo

