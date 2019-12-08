//? Document is javascript objects
With the object model, JavaScript gets all the power it needs to create dynamic HTML:
JavaScript can change all the HTML elements in the page
JavaScript can change all the HTML attributes in the page
JavaScript can change all the CSS styles in the page
JavaScript can remove existing HTML elements and attributes
JavaScript can add new HTML elements and attributes
JavaScript can react to all existing HTML events in the page
JavaScript can create new HTML events in the page
//* ----------------------------------
//! #################
//!     Selectors
//! #################

getElementsByTagName("")
//todo) document.getElementsByTagName("p")[0]
getElementsByClassName(""),//*return an array of elements with that class name
//todo) document.getElementsByClassName("happy")[0]
getElementById("")//*return that elements since the id is unique

querySelector(""); //**select the first item that it finds**
querySelectorAll(""); //**select them all**
//todo) document.querySelector("elements") ==> return the element
//todo) document.querySelectorAll("element1,elem2,elem3") ==> return an array of the elements

<li random="23">Notebook</li>
getAttribute("");// **document.getElementsByTagName("p")[0].getAttribute("id");**
//todo) document.querySelector("li").getAttribute("random") ==> return the "23"
setAttribute("")
//todo) document.querySelector("li").setAttribute("random","30")==> turn 23 to 30; 

//! #################
//!  Changing Styles
//! #################
selector.style.property= " "; //? derictly in the html file 

className; //todo) selector.className="nameOfClass" ;
classList //todo) its give us some methods that we can use
classList.add("") 
classList.remove("")
classList.toggle(" ") //todo) To switch between alternate states, on/off back and forth
//! #########################
//!  Changing the inner HTML
//! #########################
selctor.innerHTML= " add something" //DANGEROUS
//todo) it can change the complete HTML tag and content
selctor.parentElement
//todo) select the parent elements of the selected element
selctor.children
//todo) select all the children of the selected element

//! It is important to CACHE selectors in variables
//?************************************************
//! #########################
//!        DOM Methodes
//! #########################
- selector.addEventListener("event", function{what to do});
- document.createElement("element");

- element.appendChild(document.createTextNode(variable(input.value) or "text"));
- element.appendChild(element);

//! #########################
//!         DOM Events
//! #########################
//** Mouse Events:
- Click

//* KeyBoard Events:
- keypress: //todo) event.which & event.keyCode give the some number of the key pressed
addEventListener("keypress", function(event){event.which or event.keyCode})