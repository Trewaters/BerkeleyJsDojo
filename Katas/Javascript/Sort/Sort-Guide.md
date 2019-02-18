# Sort Katas
## Bubble Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n^2) | O(n^2) | O(n)

Challenge:
Given an array, sort the elements using the Bubble sort method.

```
function bubbleSort(arr = [4, 45, 2, 3, 7, 1]) {
  const len = arr.length;
  for(let i = len - 1; i  >= 0; i--){
    for(let j = 1; j <= i; j++) {        
      if(arr[j-1] > arr[j]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort());
```

## Selection Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n^2) | O(n^2) | O(n^2)

Challenge:
Given an array of positive integers, sort the elements using selection sort.
```
function selectionSort(arr = [23, 233, 6, 1, 75, 3, 2, 7]){
  for(let value of arr){    
    let [minIdx, i] = [arr.indexOf(value), arr.indexOf(value)];    
    for(let index = i + 1; index < arr.length; index++){
      if(arr[minIdx] > arr[index]){ // if the index pointer has a value less than value at minIdx pointer...
        minIdx = index; // ...make minIdx equal to index
      }
    }
    [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]; // swap the value at mimIdx with the value at the first index in the array   
  }  
  return arr;
}

console.log(selectionSort());
```

## Insertion Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n^2) | O(n^2) | O(n)

Challenge:
Given an array of positive integers, sort the elements using insertion sort.
```
function insertion(arr = [11, 34, 6, 812, 2, 5, 64, 33]){
  for(let value of arr){
    const tempValue = value;
    let position = arr.indexOf(value);
    while(tempValue < arr[position - 1] && position > 0){
      [arr[position], position] = [arr[position - 1], position - 1]; // shifts value to the right and pointer to the left
    }
    arr[position] = tempValue; 
  }
  return arr;
}

console.log(insertion());
```
## Merge Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n (log(n)) | O(n (log(n)) | O(n (log(2))

Challenge:
Given an array of positive integers, sort the elements using merge sort.
```
'use strict';

const array = [13, 2, 56, 4, 1];

const mergeSort = sortedArray => {
  if (sortedArray.length === 1) {
    return sortedArray;
  }
  const middle = Math.floor(sortedArray.length / 2),
        right = sortedArray.slice(middle),
        left = sortedArray.slice(0, middle);
  
  return merge(mergeSort(left), mergeSort(right));
}

  let sortedArray = mergeSort(array);
  sortedArray;

function merge(left, right) {
  const result = [];
  let [indexLeft, indexRight] = [0, 0];

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

console.log(`The sorted array is: ${mergeSort(array)}`);
```

## Quick Sort
Time Complexity:
Worst-Case | Average | Best
--- | --- | ---
O(n (log(n)) | O(n (log(n)) | O(n^2)

Challenge:
Given an array of positive integers, sort the elements using quick sort.
```
const array = [4, 8, 3, 45, 5, 2, 1, 6],
      [left, right] = [0, array.length - 1];
    
const quickSort = (arr, left, right) => {
    let pivot, partitionIndex;
    if(left < right){
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        quickSort(arr, left, partitionIndex - 1); // sorts the left partition
        quickSort(arr, partitionIndex + 1, right); // sorts the right partition
    }
    return arr;
}

const partition = (arr, pivot, left, right) => {
   let [partitionIndex, pivotValue] = [left, arr[pivot]];
    
    for(let i = left; i < right; i++){ // iterates thru the partition
        if(arr[i] < pivotValue){
            [arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];  // swap left value with partition index
            partitionIndex++;
        }
    }
    [arr[right], arr[partitionIndex]] = [arr[partitionIndex], arr[right]]; // swap right value with partition index
    return partitionIndex;
}

console.log(quickSort(array, left, right));
```