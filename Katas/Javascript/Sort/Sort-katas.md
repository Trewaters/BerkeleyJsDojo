# Sort Katas

## Position #1: Bubble Sort
*[documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/bubble-sort/)
*Of the five types of sorting algorithms covered in this guide, Bubble sort is the simplest but also the most inefficient. Bubble sort swaps adjacent elements if they are in the wrong order and does so until an entire passthrough is completed without any swaps occuring.

## Position #2: Selection Sort
*[documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/selection-sort)
*Description: with this implementation of the selection sort method, you will need two for loops, the nested
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

## Position #3: Insertion Sort
[Insert sort documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/insertion-sort)

**Description**: 
In this implementation of the insertion sort method, a while loop is nested inside of a for loop. There are three main operations that occur with this method. At the start of a pass thru the element is removed from the index that the pointer is pointing too, removed element is stored in a variable temporarily, a comparison between temporary value and values to the left of the empty index, shifting all values greater than the temporary value to the right, and inserting the temporary value to the right of the index that holds a value greater than the temporary value.

1. Define a variable that represents the position of the position of the pointer to be value of the for loop's initializer.

2. Define a variable that will temporarily store the value of the index the pointer is currently pointing at.

3. Create a `for` loop and initialize it at 1 index, for the test statement, set a conditional to be true until it reaches the last index of the array and set the iterator to increase the counter by one. This `for` loop is activated when the `while` loop becomes false. It is responsible for moving the pointer by one at the beginning of every pass thru. 

4. Create a `while` loop nested inside of the `for` loop. Once the `for` loop sets its pointer(starting at index 1), the while loop will handle the comparison, shifting and inserting operations described above if the variable set for the position(`for` loop pointer) is greater than zero and the position of the array minus one is greater than the value of the temp variable.

5. When the condition is true, the code block will execute two assignments, including shifting the value from previous index to the current position, `arr[position] = arr[position - 1]` and shifting over the pointer to the left by one, `position = position - 1`;

6. Once the temp value is greater than the value at the current index, position, the while loop becomes false and the temp value is inserted into the cell at the current index, `arr[position] = tempValue`.

7. Return the array when both loops have completed iterating. 

## Position #4: Merge Sort
[Merge sort documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/merge-sort)

**Description**: 

Uses the divide and conquer technique. For this sorting method, we will create two functions, one that splits up an array until each sub-divided array has a length of 1, and the other sorts and merges the sub-divided arrays.

1. For the first function, i.e. `mergeSort()`, add the base case: when the length is one, return the sub-divided array.

2. Store the middle value of the given array, create an array made up of the elements to the left of the middle value, and create an array made up of elements to the right of the middle value.

3. Return a call to the second function, i.e. `merge()`, with two arguments, recursively calling `mergeSort(left)` and `mergeSort(right)`. 

4. Define an empty array. This array will be used to merge the sorted sub arrays.

5. Define `indexLeft` and `indexRight` variables with a value of zero. These variables will act as pointers to the sub arrays.

6. Create a while loop that returns true if `indexLeft` is less than the length of the first parameter, `left`, and `indexRight` is less than the right parameter, `right`.

7. Inside the loop, add an if statement that is true if the value from the `left` array at index `indexLeft` is less than the value of `right` array at index `indexRight`.

8. If the condition is true, push the value of the left array at `indexLeft` to the result array and increment the value of `indexLeft` by one.

9. If the condition is false, push the value of the right array at `indexRight` to the result array and increment the value of `indexRight` by one.

10. If the while loop's boolean value is false, return the concatenatenation of the left array from `indexLeft` on and the right array from `indexRight` on and concatenate that with the result array.

### Time Complexity and Stack Breakdown
When it comes to recursion, you're going to deal with function calls on top of function calls (or nested calls). Each of these calls are added into an internal data structure called execution context or call stack. If you're familiar with stacks, you'll know that the flow of data in and out of it is last in first out(LIFO). For example, lets say we have in our recursion function, we have a total of three recursive calls. The call stack would look something like this: `[func(), func(), func()]`. If there are multiple calls, such is the case with recursive functions, a call is dependent on its nested call. Therefore, each preceding function is paused until the call ahead of it has completed executing. To complete the execution of each call, we start popping the stack, in this case, we would start with index 3. Once we get a returned value from index 3 call, the call at index 2 can now proceed and complete its execution and so forth.

We can examine this process with merge sort, specifically applying this method with the `[13, 2, 56, 4, 1]` array. 

Let's work our way thru each recursive call, starting with the `mergeSort(left)` half:

*Step 1*: For the first call, we get the following return: `left = [13, 2]`, `right = [56, 4, 1]`.

*Step 2*: The second call returns `left = [13]`, `right = [2]`.

### First Analysis
It took two steps to get to return the base case. 

Now let's work thru the second half recursive call, `mergeSort(right)`:

*Step 1*: For the first call, we get the following return: `left = [56]`, `right = [4, 1]`.

*Step 2*: The second call returns `left = [4]`, `right = [1]`.

### Second Analysis
This recursive call took two steps, which also gives a time complexity of n/2.

### Complete Analysis
Since we aim to sort half of an array, we can conclude the time complexity for subdividing one half recursively is n/2 steps. Because there are two halves we're working with: `mergeSort(left)` and `mergeSort(right)` we arrive at 2(n/2).(breakdown how we arrive at O(n log n)).

## Position #5: Quick Sort
[Quick sort documented here](https://guide.freecodecamp.org/algorithms/sorting-algorithms/quick-sort)

**Description**:

Divide and conquer technique

1. Choose an arbitrary number in a given array to be your pivot. The pivot is an element, p, that will be used to determine where to partition the array.

2. Create a left variable and right variable. The left variable will be used as a pointer starting at the left most index of the array. It will be used to compare the element at the current index with the element at the pivot. If the left pointer's value is less than the pivot value, it will move to the right by one, otherwise, it will stop. The same basic operation happens but in reverse with the right variable (pointer). The right variable (pointer) moves over to the left by one if the current index' element is greater than the pivot and stops if it is smaller. 

3. When both pointers have stopped, the left pointer swaps values with the right pointer.

4. The process repeats itself until both pointers are pointing to the same value and the value is greater than the pivot. Swap this value with the pivot value. P is now in the correct index. Everything to the left, is less than its value and everything to the right is greater than its value.

5. You can partition the array and treat the values on either side of p as their own sub array.

6. (insert edge case notes here)

7. (^^specify which step covers quicksort function and which part covers the partition function)

                                        [4, 8, 3, 45, 5, 2, 1, (6)]  // partition around 6
                                            /               \
                                           /                 \
                           [4, 1, 3, 2, (5)] // partition    [8, 45] 
                                        /     around 5         
                                       /                        
                            
### Time Complexity and Stack Breakdown
**Quicksort time complexity**: 5 passthroughs over n which is about n/2.
**Partition time complexity**: also 5 passthroughs over n making it n/2.

### Second Analysis
This recursive call took two steps, which also gives a time complexity of n/2.

### Complete Analysis