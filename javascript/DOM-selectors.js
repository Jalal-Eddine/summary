DOM Selectors
--------------
getElementsByTagName("")
getElementsByClassName(""),//*return an array of elements with that class name
getElementById("")//*return that elements since the id is unique

querySelector("") **select the first item that it finds**
querySelectorAll("") **select them all**

getAttribute("") **document.getElementsByTagName("p")[0].getAttribute("id");**
setAttribute("")

##Changing Styles

selector.style.property= " " //ok

className //best **selector.className="" to attribut a classe to tag**
classList //best

classList.add("")
classList.remove("")
classList.toggle(" ") **To switch between alternate states, on off**

##Bonus
selctor.innerHTML= " add something" //DANGEROUS

selctor.parentElement
selctor.children

##It is important to CACHE selectors in variables

DOM Methodes
-------------
- selector.addEventListener("event", function{what to do});
- document.createElement("element");

- element.appendChild(document.createTextNode(variable(input.value) or "text"));
- element.appendChild(element);

DOM Events
-----------
##Mouse Events:
- Click

##KeyBoard Events:
- keypress **keyCode, which:addEventListener("keypress", function(event){event.which or event.keyCode})