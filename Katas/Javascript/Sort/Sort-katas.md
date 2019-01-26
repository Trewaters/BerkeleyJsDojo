Coming soon...

### Bubble Sort
- [documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/bubble-sort/)
-Of the five types of sorting algorithms covered in this guide, Bubble sort is the simplest but 
also the most inefficient. Bubble sort swaps adjacent elements if they are in the wrong order and
does so until an entire passthrough is completed without any swaps occuring.

### Selection Sort
- [documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/selection-sort)
-With this implementation of the selection sort method, you will need two for loops, the nested
loop will be used as a pointer to check for the lowest value in the array and the outer loop
will be used to shift the start of the next passthru by one.
These are the steps to follow:
1. Define a variable's value to the first index' element. This variable will be used to temporarily 
set the lowest value in the array. 
2. Check every cell in an array from left to right. That will be handled by the nested loop. As 
you iterate thru the array, check the value of each index. 
3. If the current index has a lower value than the current lowest set value, reassign your variable 
to be the value of the current index. 
4. Once you've iterated thru the array n times and completed the passthru, swap the value from 
the first index with the value of the last index that was set to be the lowest value in the array. 
5. The start of subsequent passthrus will shift incrementally by one. That will be the outer 
loop's function.

### Insertion Sort
- [documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/insertion-sort)
-In this implementation of the insertion sort method, a while loop is nested inside of a for
loop. There are three main operations that occur with this method: at the start of a passthru
the element is removed from the index the pointer is pointing, removed element is stored in a 
variable temporarily, a comparison between temporary value and values to the left of the empty 
index, shifting all values greater than the temporary value to the right, and inserting
the temporary value to the right of the index that holds a value greater than the temporary value.
1. Define a variable that represents the position of the position of the pointer to be value of 
the for loop's initializer.
2. Define a variable that will temporarily store the value of the index the pointer is currently 
pointing at.
3. Create a for loop and initialize it at 1 index, for the test statement, set a conditional to 
be true until it reaches the last index of the array and set the iterator to increase the counter
by one. This for loop is activated when the while loop becomes false. It is responsible of moving 
the pointer by one at the beginning of every passthru. 
4. Create a while loop nested inside of the for loop. Once the for loop sets its pointer(starting
at index 1), the while loop will handle the comparison, shifting and inserting operations
described above if the variable set for the position(for loop pointer) is 
greater than zero and the position of the array minus one is greater than the value of the temp 
variable.
5. When the condition is true, the code block will execute two assignments, including shifting the value from previous index to the current position, arr[position] = arr[position - 1] and shifting over the pointer to the left by one, position = position - 1;
6. Once the temp value is greater than the value at the current index, position, the while loop becomes false and the temp value is inserted into the cell at the current index, arr[position] = tempValue.
7. Return the array when both loops have completed iterating. 

### Merge Sort
- [documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort)
-Divide and conquer technique
-Create two functions, one that splits up an array until each sub-divided array has a length of 1, and the other sorts and merges the sub-divided arrays.
1. For the first function, i.e. mergeSort(), add the base case: when the length is one, return the sub-divided array.
2. Store the middle value of the given array, create an array made up of the elements to the left of the middle value, and create an array made up of elements to the right of the middle value.
3. 
4. 
5. 


### Quick Sort
- [documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/quick-sort)

1. Choose an arbitrary number in a given array to be your pivot. The pivot is an element that will be used to determine 
2. Create a left variable and right variable. The left pointer will compare the value it is pointed at with the pivot. (expand on the function of the left pointer)(add detail about the role of the right pointer)
3. (detail the swap process)
4. (describe what is happening with recurssion functionality)
5. 