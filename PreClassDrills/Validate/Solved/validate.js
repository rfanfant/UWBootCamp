// Write a function that takes a string as a parameter and determines if it is a valid password with the following constraints: 

// 1. It must be at least 8 characters long
// 2. It must contain at least 1 capital letter
// 3. It must contain at least 1 lower case letter

// Output true if the string is a valid password or false otherwise. 

// Ex:
// Input: RexTheDog
// Output: true

// Input: rexthedog
// Output: false

// Input: REXTHEDOG
// Output: false


// Introduction to Big O 
// - https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?


// validate(n) TIME COMPLEXITY --> O(n)

function validate(str){
    // check to see if str has a length is greater than 8
    // console.log(str.length)
    var upperCase = false;
    var lowerCase = false;
    
    if(str.length < 8){
        return false;
    }
    // does it contain an uppercase
    for (let i = 0; i < str.length; i++) {
        // console.log("INDEX: ", str[i])
        if(str[i] === str[i].toUpperCase()){
            upperCase = true;
        }else if(str[i] === str[i].toLowerCase()){
            lowerCase = true;
        }
        if(lowerCase && upperCase){
            return true;
        }
    }
    // does it contain a lowercase
    return false
}

console.log(validate('REXTHEDOG'))