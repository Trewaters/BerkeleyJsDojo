const numArray = [];

let numCount = 3;

while (numCount > 0) {
  console.log(`Adding to your array`);
  numArray[numCount - 1] = numCount;
  numCount--;
}

console.log(numArray);

console.log(numArray.reverse());

console.log(numArray.sort());
