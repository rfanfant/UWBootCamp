// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".
// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.


var uniqueMorseRepresentations = function(words) {

    if(words.length === 0){
        return 0;
    }
    var codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    var alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    var codeArray = [];
    for(var i = 0; i < words.length; i++){
        var morseCode = '';
        for(j = 0; j < words[i].length; j++){
            for(var k = 0; k < alpha.length; k++){
                if(words[i][j] === alpha[k]){
                    morseCode += codes[k]
                }
            }
        }
        codeArray.push(morseCode)
        
    }

    var types = [];

    for(var r = 0; r < codeArray.length; r++){
        
        if(!types.includes(codeArray[r])){
            types.push(codeArray[r])
        }
    }

    return types.length;


};



// SOLUTION 2 WITH NOTES

var English_alphabet = "abcdefghijklmnopqrstuvwxyz";
var morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
var morseCodeArray = [];

// input => words = ["gin", "zen", "gig", "msg"]
function translation(words) {
    // words = ["gin", "zen", "gig", "msg"]
   
    for (var i = 0; i < words.length; i++) {
        // 1st iteration
        // words[i] => 'gin'

        // loop over words[i] (i.e. 'gin')
        var currentWord = words[i];
        // hold our string for our new morsecode word
        var morseCodeWord = '';
        // input => 'gin'
        // output => 'morsecode_gin'
        for (var j = 0; j < currentWord.length; j++) {
            // currentWord[j] = 'g'
            // locate the index of currentWord[j] inside English_alphabet
            var index = English_alphabet.indexOf(currentWord[j])
            // morseCode[index]
            morseCodeWord += morseCode[index];
        }
        // push morseCodeWord into morseCodeArray
        morseCodeArray.push(morseCodeWord);

    }
    // locate the index of the character in the english_alphabet
    console.log(morseCodeArray);
    // returns => ['--...-.', '--...-.', '--...--.', '--...--.' ]

    // 2nd REQUIREMENT: IDENTIFY DIFFERENT TRANSFORMATIONS
    // SIDE NOTE (My mistake, for this problem we are instructed to return the amount of different transformations that took place)
    var count = 0;
    var differentTypes;
    for (let a = 0; a < morseCodeArray.length; a++) {
        
        //count how many times there is a match in the array
        // 1st iteration morseCodeArray[a] => '--...-.'
    
        // if(morseCodeArray[a] === morseCodeArray[a+1]) {
        //     count++;
        // }
        // console.log('output' + count)
        
        // if the current index does not equal an existing transformation in our differentTypes array, then we know that we have another type
       if(differentTypes.includes(morseCodeArray[a]) === false){
            differentTypes.push(morseCodeArray[a])
       }else{
           // do nothing
       }
    }

    return 'LOCATED ' + differentTypes.length + ' DIFFERENT TRANSFORMATIONS !';
}

let words = ["gin", "zen", "gig", "msg"];
console.log(translation(words));