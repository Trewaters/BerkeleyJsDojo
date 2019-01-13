# Sort Katas
## Bubble Sort
-Time Complexity

-Challenge:

## Selection Sort
-Time Complexity

-Challenge:

## Insertion Sort
-Time Complexity

-Challenge:

## Merge Sort
-Time Complexity
-Challenge:
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

For example, . Our minimum sum is  and our maximum sum is . We would print

16 24
```
let array = [13, 2, 56, 2, 1];
miniMaxSum(array);

function miniMaxSum(arr) {

    function mergeSort(sortedArray) {
       
        if (sortedArray.length === 1) {
            
            return sortedArray;
        }

        const middle = Math.floor(sortedArray.length / 2) 
        const left = sortedArray.slice(0, middle) 
        const right = sortedArray.slice(middle) 

        return merge(mergeSort(left), mergeSort(right));
    }
    let sortedArray = mergeSort(arr);
    sortedArray;
  
    function merge(left, right) {
        let result = []
        let indexLeft = 0
        let indexRight = 0

        while (indexLeft < left.length && indexRight < right.length) {
            if (left[indexLeft] < right[indexRight]) {
                result.push(left[indexLeft])
                indexLeft++
            } else {
                result.push(right[indexRight])
                indexRight++
            }
        }

        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
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

}
```