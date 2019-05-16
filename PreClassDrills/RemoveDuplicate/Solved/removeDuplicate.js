// Write a function that takes in an array of integers and returns an array with the duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// removeDub(n) TIME COMPLEXITY --> O(n)

function removeDub(arr){
    // declare an empty array
    var newArray = [];

    // push all the elements in arr into newArray
    // loop through arr
    for (let i = 0; i < arr.length; i++) {
        // check to see if we have dups
        // if the current index is not in newArray, push the value of the element into our newArray
        if(newArray.indexOf(arr[i]) === -1 ){
            newArray.push(arr[i])
        }
    }
    return newArray;
}

console.log(removeDub([4,5,4,4,7,5]))

