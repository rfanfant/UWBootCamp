// Write a function that takes in a string and outputs the number of vowels (not counting y).

// Ex:
// Input: "hello"
// Output: 2

// Input: "you are great!"
// Output: 6

// Input: "why?"
// Output: 0

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// countVowels(n) TIME COMPLEXITY --> O(n)

function countVowels(str){
  // console.log(str) // output -> "hello"
  let count = 0; 
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    // console.log(str[0]) // output -> h
    // if it is a vowel
    if(vowels.includes(str[i])){
      // console.log(str[i])
      // increase the count by 1
      count++;
    }

  }
  return count;
}

console.log(countVowels("hello"));
