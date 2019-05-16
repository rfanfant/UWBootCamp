// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 25
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22, 24]

function selfDividing(left, right){
    // store all the numbers between left and right in an array including left and right
    
    // iterate x amount of times until we reach right
    var checkThese = [];
    checkThese.push(left);
    while(!checkThese.includes(right)){
        checkThese.push(left++)
    };
    // iterate around our new array

        // on each iteration check to see if our number is a self dividing number
        
        // if it is a self dividing number, push that number into our output array

    // return output
}

console.log(selfDividing(1, 25))