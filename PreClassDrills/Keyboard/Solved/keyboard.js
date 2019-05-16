// Given a List of words, return the words that can be typed using letters of alphabet on only one row of the American keyboard like the image below.

// Q W E R T Y U I O P
//  A S D F G H J K L
//   Z X C V B N M 

// Example:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// keyboard(n) TIME COMPLEXITY --> O(n*m)

function keyboard(arr){
    var row1 = 'qwertyuiop';
    var row2 = 'asdfghjkl';
    var row3 = 'zxcvbnm';

    var validWords = [];
    // iterate around the array
    for (let i = 0; i < arr.length; i++) {
        const currentWord = arr[i];
        // currentWord = 'hello'
        // iterate around each letter in the word and check against the letters in each row of the keyboard
        let rowTracker = [];

        for (let k = 0; k < currentWord.length; k++) {
            let letter = currentWord[k].toLowerCase();
            // letter => "h"
             // if the current character is found on the first row of the keyboard, push row1 into our row tracker array
             if(row1.includes(letter)){
                rowTracker.push("row1");
             }
             // else if, found on the second row, push row2  into our row tracker array
             else if(row2.includes(letter)){
                rowTracker.push("row2");
             }
            // else, found on the third row, push row3 into our row tracker array
            else{
                rowTracker.push("row3");
            }

            // if rowTracker is greater than 2 and the current index does not equal the one prior, break the inner loop and jump to the next word
            if(rowTracker.length > 1 && rowTracker[k] !== rowTracker[k-1]){
                break;
            }
            // if rowTracker.length equals currentWord.length, then we know that currentWord is valid since we made it this far in our iterator
            else if(rowTracker.length === currentWord.length){
                validWords.push(currentWord);
            }
        }
    }
    // output => ['Alaska', 'Dad']
    return validWords;
}

console.log(keyboard(["Hello", "Alaska", "Dad", "Peace"]));