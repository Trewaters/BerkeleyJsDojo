# Javascript Katas
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
```
var bool = True; // boolean
var nothing = null; // null
var nothingUn; // undefined
var numMax = Number.MAX_VALUE; // number at maximum value
var numMin = Number.MIN_VALUE; // number at minimum value
var str = "1"; // string value
var symbol = Symbol(42); // symbols
var obj = {};
```