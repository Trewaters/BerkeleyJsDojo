# Javascript Katas

The positions are not ordered by difficulty.

## Position 1: Reverse an Array

Reverse array without using the `.reverse()` method

- **Option 1:** Reverse array out of place
- **Option 2:** Reverse array in place

## Position 2: Build an Object

Build an object that is not empty. Display the keys of that object. Display the values of that object you have built.

As an additional challenge also get the entries for the object. This should show the key-value pairings. Delete one of the properties from your object.

Transform the object into a string, then back to into an object.

- **Option 1:** Try using the date object for the above kata.
- **Option 2:** Try using the RegEx object.

## Position 3: Loop through Object

Print the object's properties and nested properties.

## Alert, Log, Prompt

Alert about an issue, log it to console, and prompt user for input about the alert.

```
var vIssue = "Warning... ah-ooga...All hands on deck! \nSwirly thing alert! \nGo to Blue Alert (directive 34124)... \nStep up to Red Alert?";

function alertTest (){
    alert(vIssue);
    console.log(vIssue);
    };

alertTest();

var vResponse = prompt("Captain! What are your orders?");

alert("Orders received Captain... " + vResponse);
```

## Data Types

create all the data types in Javascript. Then create a check to verify the types were created properly.

```javascript
var bool = true; // boolean
var nothing = null; // null
var nothingUn; // undefined
var numMax = Number.MAX_VALUE; // number at maximum value
var numMin = Number.MIN_VALUE; // number at minimum value
var str = "1"; // string value
var symbol = Symbol(42); // symbols
var obj = {};
var arr = [];
```

test your variable with `typeof xyz` to verify that you created the correct data type

## Conditionals

Build a statement that will allow users to know if they made the right choice or the wrong one.

In this case the "Right Choice!" is "salad" over "meat". Ask user for their choice of salad or meat. If the user chooses "meat" they made the wrong choice. If they choose "Salad" then they made the "Right Choice!".

## Loops

Either stay "for" a minute or stay for a "while".

Write a loop that will exit after a minute.

Write a loop that count off minutes and hours until it reaches and end time. For example each minute it console.logs("Time elapsed is a minute").

## Arrays: Build an Array

Create an array of data. Must have at least 2 items. Loop through each item in the Array and console.log each of them.

## Functions

Create a function to calculate tip amount. If given the total charge of the service show how much money should be added to the charge as a tip. Give tip amount and total amount after tip.
