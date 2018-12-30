### Alerts
- [documented here](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
  
  `window.alert("string-message");` 
  
  or

  ```
  function alertTest (){
    alert("Warning... ah-ooga...All hands on deck! \nSwirly thing alert! \nGo to Blue Alert (directive 34124)... Step up Red Alert?")
  }
  ```

- `window.alert('Hello');` will pause the execution of the program and display a message in a dialog box. The message is provided as an argument to the method, and undefined is always returned:
- `window.confirm('Do you wish to continue?');` will stop the execution of the program and display a confirmation dialog that shows the message provided as an argument, and giving the options of OK or Cancel. It returns the boolean values of true if the user clicks OK, and false if the user clicks Cancel

### Console object
- [documented here](https://developer.mozilla.org/en-US/docs/Web/API/Console)
- `console.log("place your important message here for the debugging console")`
- `console.error` [documented here](https://developer.mozilla.org/en-US/docs/Web/API/Console/error)
- `console.trace` [documented here](https://developer.mozilla.org/en-US/docs/Web/API/Console/trace) - this one sounded interesting so I added it but I need to experiment and see what it does.

### Prompt
- [documented here](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- `window.prompt('Please enter your name:');` will stop the execution of the program. It displays a dialog that shows a message provided as an argument, as well as an input field that allows the user to enter text. This text is then returned as a string when the user clicks OK. If the user clicks Cancel, null is returned

### Primitive Data Types
- [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- Numbers
  - cover NaN (not a number)
- Strings 
  - cover escaping characters \' & \" & \t & \n \\ & unicode-emojis
  - string methods length, indexing with .charAt or console.log("Hello"[0])
- Booleans
- Null
- Undefined
- Symbols (new in ECMAScript 6)
- Objects
- Arrays ???
- `typeof` operator
  - [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

### Conditionals (Comparison & Logical Operators)
- Ternary Operators, [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  - Syntax: `condition ? value if true : value if false`
- Switch Statements, [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
  - Syntax: 
  ```
  switch(expression){
    case value1:
      // Code block if expression matches value1
      break;
    case value2:
      // code block if expression matches value2
      break;
    default:
      // code block to run if no other cases are true
      // Switch cases use strict comparison (===)
      // no break necessary if it is the last switch block
  }
  ```
- if
  - Syntax: `if( x ){}`
- ElseIf
  - Syntax: `if( x ){}else{}`
  - Syntax: 
  ```javascript 
  if( x ){
    // code something
  }elseif( y ){
    // code another something
  }else{
    // if nothing else, then this will happen
  }
  ```

### Variable Declarations

- `var` [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- `const`[documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- `let`[documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

### Loops

#### For Loops

```javascript
for (var i = 0; i < 10; i++) {
	console.log("We are on iteration number: " + i);
}
```

#### While Loops

```javascript
var userInput;

while (userInput !== "STOP") {
    userInput = prompt("Tell me something funny! Or
 					type STOP to exit this prompt");
    console.log(userInput);
}
```

### Arrays

- `.isArray()` determines whether the passed value is an array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

`Array.isArray();`

- `.sort()` sorts array in place and returns the array, [document here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

`numArray.sort();`

- `.reverse()` reverses an array in place [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

`numArray.reverse();`

- `.slice()` returns a shallow copy of a portion of an array into a new array object, starting in one position going to the end. Original array is not modified. [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

  `numArray.slice(2,4);`

- `.splice()` removes items from an array then inserts new items in their place [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

  `numArray.splice(3,1,"Three Thousand");`

- count amount items in the array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

  `numArray.length;`

- remove the last item from an array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

  `numArray.pop();`

- removes the first item in the array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

  `numArray.shift();`

- appends a new value to the end of the array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

  `numArray.push();`

- appends a new item to the beginning of the array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

  `numArray.unshift(-1);`

- merge an array with one or more arrays [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

  `numArray.concat(["one","two","three"]);`

- spread operator

  `numArray = [...numArray, ...["Four","Five","Six","Seven"]];`

- turn the array into a string that comprises all the items in the array, separated by commas [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

  `numArray.join();`

  `numArray.join(" + ");`

- find item position in array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

  `numArray.indexOf("Five");`

- boolean value for element in array [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

  `numArray.includes("Three");`

#### Array, For Each Loop

```javascript
var dogs =  ["pomeranian","corgi", "shih tzu"];
dogs.forEach(
  function(dog) { 			// dog is a parameter name used
    dog = dog + "s";  	// to represent each item 
});
console.log(dogs);					          // One thing to note: a forEach loop
["pomeranian","corgi", "shih tzu"];  	// does not change the original array!
```

### Objects
object documentation [here](https://javascript.info/object)

```javascript
var movie = {
 	"name": "Star Wars",
 	"year": 1977,
 	"director": "George Lucas",
 	"hasSequel": true,
 	"imdb": "http://www.imdb.com/title/tt0076759/"
}
```

- keyword delete will remove the property

`delete OBJECT.PROPERTY`

- dot notation Object.KEY
- bracket notation OBJECT["KEY"]

### HTML Forms using JavaScript
- reference for forms ( https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript )

### Set

### Weak Set

### Maps
