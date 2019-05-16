// A pangram is a sentence that contains all the letters of the English alphabet at least once. 


// * Write a function that takes a string and determines whether the string is a pangram.
// BONUS: **without** typing out the full alphabet anywhere in your code.

// For example: `The quick brown fox jumps over the lazy dog`
// OUTPUT => true

// Introduction to Big O 
// - https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// isPangram(n) TIME COMPLEXITY --> O(n)

var isPangram = function(str){
    // check to see if str has length less than 26, if it does, return false
    if(str.length < 26){
        return false;
    }
    // split the string into an array so that we can individually read each character
    var newArray = str.split("").join("").toLowerCase();
   // first split => ["The", "quick", ...]
    // after the join => "Thequick ..."
    // after toLowerCase() => "thequick ..."
    // after second split() => ['t', 'h', 'e', ...]

    var letterHolder = [];

    // loop over newArray
    for (let i = 0; i < newArray.length; i++) {
        // if newArray[i] is not in letterHolder, push the value into our letterHolder
        if(!letterHolder.includes(newArray[i])){
            letterHolder.push(newArray[i])
        }
    }

    // if newArray equals 26, return true, str is a pangram
    if(letterHolder.length === 26){
        return true
    }else{
        return false;
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"))