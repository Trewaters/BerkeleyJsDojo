# Javascript DOM

## Get HTML Elements

* JS Selector syntax resource (https://www.w3schools.com/w3js/w3js_selectors.asp)
* JS Selector coding strategy (https://gomakethings.com/javascript-selectors-in-html/)

* [`document` Object](https://developer.mozilla.org/en-US/docs/Web/API/Document) represents the web page loaded in the browser. Entry into the [DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)
* [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) return the first
* [`document.querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) returns a static (not live) [Node List](https://developer.mozilla.org/en-US/docs/Web/API/NodeList). 
* [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) within the document that matches the specifiec selector, or group of selectors. If not matches are found `null` is returned.

* Find first matching element, "not found" returns `null`.

```javascript
// The first button
let button = document.querySelector('button');

// The first element with the .bg-red class
let red = document.querySelector('.bg-red');

// The first element with a data attribute of snack equal to carrots
let carrots = document.querySelector('[data-snack="carrots"]');
```

* [Node.parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) read-only `parentNode` property of the [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node) interface returns the parent of the specified node in the DOM tree.

* Set or Read values

```javascript
let elem = document.querySelector('#main');

// Get the ID of the element
// return "main"
let id = elem.id;

// Set the Id of the element
elem.id = 'secondary';

// Get the parentNode of the element
// This property is read-only
let parent = elem.parentNode;
```

* Find all matching elements on a page using any valid CSS selector

```javascript
// Get all button elements
let buttons = document.querySelectorAll('button');

// Get all elements with the .bg-red class
let elemsRed = document.querySelectorAll('.bg-red');

// Get all elements with the [data-snack] attribute
let elemsSnacks = document.querySelectorAll('[data-snack]');
```

## Event Listeners

* [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) implemented by objects that can receive events and may have listeners for them. 
* [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) sets up a function to be called whenever the specified event is delivered to the target.
* [`event.target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) Read-only `target` property, Reference the object on which an event was triggered.

```javascript
let btn = document.querySelector('#click-me');

btn.addEventListener('click', function(event){
    console.log(event); // the event details
    console.log(event.target); // The clicked element
});
```

## Element

* [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) base class for all element objects.
* [matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches) method checks if an element would be selected. Returns `true` if it matches.

```javascript
// Check if the first .bg-red element has the [data-snack attribute]
let red = document.querySelector('.bg-red');
if (red.matches('[data-snack]')){
    console.log('Yummy snack!');
} else {
    console.log('No snacks');
};
```

* [getAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) method returns value of a specified attribute on the element.

```javascript
let elem = document.querySelector('#lunch');

// get the value of the [data-sandwich] attribute
let sandwich = elem.getAttribute('data-sandwich');

// set a value for the [data-sandwich] attribute
elem.setAttribute('data-chips');

//  check if an element has the `[data-drink]` attribute
if (elem.hasAttribute('data-drink')){
    console.log('Add a drink!');
}
```

* [setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) 
* [hasAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute) 
* [removeAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute) remove attribute of a specified element.


## EventTarget

* [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method can only add to an individual element.

```javascript
// Listen for clicks on the entire window
document.addEventListener('click',function(event){

    // If the clicked element has the `.click-me` class, it's a match!
    if (event.target.matches('.click-me')){
        // Do Something...
    }

});
```

## Update text in an element
* [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
* [HTMLElement.innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
* [Element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)