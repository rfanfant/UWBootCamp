// Write a function that takes an array of integers as an input and outputs the first duplicate.

// Ex:
// Input: [ 2, 5, 6, 3, 5 ]
// Output: 5

// Input: [ 1, 3, 4, 1, 3, 4 ]
// Output: 1

// Input: [ 2, 4, 5 ]
// Output: undefined

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// checkDub(n) TIME COMPLEXITY --> O(n)

function checkDub(arr){
  for (let i = 0; i < arr.length -1; i++) {
    // [ 1, 3, 4, 1, 3, 4 ]
    // arr.slice(i+1) => [3, 4, 1, 3, 4 ]
    if(arr.slice(i+1).includes(arr[i])){
      return arr[i];
    }
  }
  return undefined;
}


console.log(checkDub([ 1, 3, 4, 1, 3, 4 ]))


