# Javascript DOM

## Get HTML Elements

* find first matching element, "not found" returns `null`.

```javascript
// The first button
let button = document.querySelector('button');

// The first element with the .bg-red class
let red = document.querySelector('.bg-red');

// The first element with a data attribute of snack equal to carrots
let carrots = document.querySelector('[data-snack="carrots"]');
```

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

```javascript
let btn = document.querySelector('#click-me');

btn.addEventListener('click', function(event){
    console.log(event); // the event details
    console.log(event.target); // The clicked element
});
```

## 