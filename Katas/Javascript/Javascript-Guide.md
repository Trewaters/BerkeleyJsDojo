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

### Variable Declarations
- `var` [documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- `const`[documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- `let`[documented here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

### Arrays + While Loops

`const numArray = [];`

`let numCount = 10;`

`while( numCount > 0 ){ console.log( "Adding to your array" ); numArray[numCount-1]=numCount; numCount-- ; } ;`

`console.log(numArray);`

`console.log(numArray.reverse());`

`console.log (numArray.sort());`

- creates a subarray; effectively chopping out a slice of an original array, starting at one position and finishing at another

  `numArray.slice(2,4);`

- removes items from an array then inserts new items in their place

  `numArray.splice(3,1,"Three Thousand");`

- count amount items in the array

  `numArray.length;`

- remove the last item from an array

  `numArray.pop();`

- removes the first item in the array

  `numArray.shift();`

- appends a new value to the end of the array

  `numArray.push();`

- appends a new item to the beginning of the array

  `numArray.unshift(-1);`

- merge an array with one or more arrays

  `numArray.concat(["one","two","three"]);`

- spread operator

  `numArray = [...numArray, ...["Four","Five","Six","Seven"]];`

- turn the array into a string that comprises all the items in the array, separated by commas

  `numArray.join();`

  `numArray.join(" + ");`

- find item position in array

  `numArray.indexOf("Five");`

- boolean value for element in array

  `numArray.includes("Three");`

  `numArray.inclued("Tre");`

### Set

### Weak Set

### Maps