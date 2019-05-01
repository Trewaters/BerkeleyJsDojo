# Position solutions

## Position 1: Reverse an Array

- Option 1
```javascript
let originalArray = [1,2,3,4];

function reverseArr (vArray){
    let newArray = [];
    let vArrLen = vArray.length;
    for (var i = 0; i<vArrLen; i++){
        newArray[i] = vArray.pop();
    };
    return newArray;
};

console.log(reverseArr(originalArray));
```

- Option 2

## Position 2: Build an Object

```javascript
function buildObj(vNum) {
  var obj = {};
  for (i = 0; i <= vNum; i++) {
    obj[i] = i * 1000;
  }
  return obj;
}

console.log("keys only..." + Object.keys(buildObj(6)));
console.log("values only..." + Object.values(buildObj(6)));
```

## Position 3: Loop through Object

[solution author](https://stackoverflow.com/questions/15690706/recursively-looping-through-an-object-to-build-a-property-list)

```javascript
function iterate(obj, stack) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object") {
        iterate(obj[property], stack + "." + property);
      } else {
        console.log(property + " " + obj[property]);
        console.log(stack + "." + property); // added this so it was easier to read.
      }
    }
  }
}
iterate(response, "");
```

## Position 5: Print Multiplication table
let yNum: number = 12;
let xStr: string = "";
let yStr: string = "";

for(let y: number = 1; y <= yNum; y++){
    if(y == 1){
        yStr = "Table";
        for(let j = 1;j<=yNum;j++){
            yStr += `\t${j}`
        }
        console.log(yStr);
        continue;
    };

    xStr = `${y} x\t`;
    for(let xNum: number = 1; xNum <= yNum; xNum++){
        xStr += `${y * xNum}\t`;
    };
    console.log(xStr);
}