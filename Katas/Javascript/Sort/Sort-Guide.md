# Sort Katas
## Bubble Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n^2) | O(n^2) | O(n)

Challenge:
Given an array, sort the elements using the Bubble sort method.

```
const array = [4, 45, 2, 3, 7, 1];
bubbleSort(array);

function bubbleSort(arr) {
  let len = arr.length;
  let tempValue = 0;
  for(let i = len - 1; i  >= 0; i--){
    for(let j = 1; j <= i; j++) {  
        
        if(arr[j-1] > arr[j]) {
            tempValue = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = tempValue;
        }
    }
  }
  console.log(arr);
}
```

## Selection Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n^2) | O(n^2) | O(n^2)

Challenge:
Given an array of positive integers, sort the elements using selection sort.
```
let array = [23, 233, 6, 1, 75, 3, 2, 7];

const selectionSort = arr => {
  let tempElement = 0;
  
  for( let i = 0; i < arr.length; i++ ) {
    let minIdx = i;
    for( let index = i + 1; index < arr.length; index++ ){
      if( arr[minIdx] > arr[index] ){
        minIdx = index;
      }
    }
    tempElement = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = tempElement;
  }  
  console.log(arr);
}

selectionSort(array);
```

## Insertion Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n) | O(n^2) | O(n^2)

Challenge:
Given an array of positive integers, sort the elements using insertion sort.
```
let array = [11, 34, 6, 812, 2, 5, 64, 33];

const insertion = arr => {
  let length = arr.length;
  for(let i = 1; i < length; i++){
    let tempValue = arr[i];
    let position = i;
    while(tempValue < arr[position - 1] && position > 0){
      arr[position] = arr[position - 1];
      position = position - 1;
    }
    arr[position] = tempValue;
  }
  console.log(arr);
}

insertion(array);
```
## Merge Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n (log(n)) | O(n (log(n)) | O(n (log(2))

Challenge:
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, arr = [1, 3, 5, 7, 0]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print: 16 24.
```
let array = [13, 2, 56, 4, 1];

const mergeSort = sortedArray => {
  if (sortedArray.length === 1) {
    return sortedArray;
  }
  const middle = Math.floor(sortedArray.length / 2);
  const right = sortedArray.slice(middle); 
  const left = sortedArray.slice(0, middle);
  console.log("left subarray is: ", left + " right subarray is: ", right + " middle is: ", middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

  let sortedArray = mergeSort(array);
  sortedArray;

function merge(left, right) {
  // console.log("left: ", left + " right: ", right);
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
    
  }
  console.log("result array is: ", result.concat(left.slice(indexLeft)).concat(right.slice(indexRight)));
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

let mini = 0;
let max = 0;
let maxShift = 1;

for (let i = 0; i < sortedArray.length - 1; i += 2) {
  let maxPointer = i + maxShift;

  mini += sortedArray[i] + sortedArray[i + 1];
  max += sortedArray[maxPointer] + sortedArray[maxPointer + 1];
}

console.log(mini + " " + max);
```


## Quick Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n (log(n)) | O(n (log(n)) | O(n^2)

Challenge:
Given an array of positive integers, sort the elements using quick sort.
```
const array = [4, 8, 3, 45, 5, 2, 1, 6];
let left = 0, right = array.length - 1;

const quickSort = (arr, left, right) => {
   var len = arr.length, pivot, partitionIndex;


  if(left < right){ // 
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  console.log(arr);
}

const partition = (arr, pivot, left, right) => {
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

const swap = (arr, i, j) => {
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

quickSort(array, left, right);
```