// Maximin

// Write a function that finds the minimum and maximum elements from an array without using the Math.min or Math.max methods.


// Example
// Input => [4, 1, 5, 2, 3]
// Ouput => [1, 5]

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// keyboard(n) TIME COMPLEXITY --> O(n)

function maximin(arr){
    // declare var that sets the min and max 
    var min = arr[0];
    var max = arr[0];

    // loop around arr and compare each number to min and max
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < min){
            min = arr[i];
        }else if(arr[i] > max){
            max = arr[i];
        }
    }
    return [min, max];
}
console.log(maximin([4, 1, 5, 2, 3]));