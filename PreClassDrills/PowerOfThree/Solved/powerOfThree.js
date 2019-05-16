// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true

// Example 2:

// Input: 45
// Output: false

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// powerOfThree(n) TIME COMPLEXITY --> O(n)

var powerofThree = function(n){
    //  Check to see if 3xth power equals N
     // if true, return true. N is a power of 3

    // else, if 3 to the xth power is greater than N, then we know we've gone to far, N is not a power of 3

    // increment x by 1 and run our iteration again

    for (let i = 0; ;i++) {
        if(Math.pow(3, i) === n){
            return true;
        }else if(Math.pow(3, i) > n ){
            return false;
        }
    }
}

console.log(powerofThree(45));