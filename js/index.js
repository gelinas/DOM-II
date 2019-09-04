// Your code goes here

/*
## Task 2: Create Unique Event Listeners

* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
	* [ ] `mouseover`
	* [ ] `keydown`
	* [ ] `wheel`
	* [ ] `drag / drop`
	* [ ] `load`
	* [ ] `focus`
	* [ ] `resize`
	* [ ] `scroll`
	* [ ] `select`
	* [ ] `dblclick`

Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
* [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`
*/

// mouse enter and mouse leave

let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        TweenMax.to(element, 1, {backgroundColor:"green"});
      });
});

navLinks.forEach(element => {
    element.addEventListener('mouseleave', (event) => {
        element.style.backgroundColor = "#FFFFFF";
      });
});

let header = document.querySelector(".nav-container")

header.addEventListener('mouseenter', (event) => {
    header.style.backgroundColor = "orange";
  });

header.addEventListener('mouseleave', (event) => {
    header.style.backgroundColor = "#FFFFFF";
  });

// clicks

navLinks.forEach(element => {
    element.addEventListener('click', (event) => {
        element.style.backgroundColor = "pink";
        event.stopPropagation();
      });
});

  header.addEventListener('click', (event) => {
    header.style.backgroundColor = "gray";
});

// keydown

let pageImages = document.querySelectorAll("img");

document.addEventListener('keydown', (event) => {
    pageImages[1].setAttribute('src', "https://images.unsplash.com/photo-1553531888-a5892402adce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80");
});

// keyup

document.addEventListener('keyup', (event) => {
    pageImages[1].setAttribute('src', "img/fun-bus.jpg");
});

// resize

let contentSection = document.querySelectorAll(".content-section");

window.addEventListener('resize', (event) => {
    contentSection.forEach(element => {
        element.style.flexFlow = "column nowrap";
    });
});

// load

window.addEventListener('load', (event) => {
    pageImages[0].setAttribute('src', "https://images.unsplash.com/photo-1517606400858-ba377e7e66d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2042&q=80");
});

// dblclick

pageImages.forEach(element => {
    element.addEventListener('dblclick', (event) => {
        TweenMax.to(element, 2, {scale:1.3});
    });
});

// scroll

window.addEventListener('scroll', (event) => {
    header.style.backgroundColor = "lightgray";
});

// wheel
let containerHome = document.querySelector(".home");

window.addEventListener('wheel', (event) => {
    containerHome.style.backgroundColor = "darkgray";
});

/*

## Stretch Task:

* [X] Go look at [GSAP](https://greensock.com/) and implement the animations found in that library with your custom events.

## Stretch assignment

* [X] Take a look at the [stretch assignment](stretch-assignment) and follow the instructions in the read me file.
*/