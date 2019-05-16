// Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array parameter and , if it returns true, add the element to a new array. Return the new array without using array methods except for .push() and .forEach()

// Ex:

// Input: ([1,2,3], function(num){return num === 2})
// Output: [2]

// Input: ([1,2,3,4,5,6], function(num){return num % 2 === 0})
// Output: [2,4,6]

// Input: ([1,2,3,4,5,6], function(num){return num > 3})
// Output: [4,5,6]
function filter(arr, cb){
    var newArray = [];
    // iterate around arr
    for (let i = 0; i < arr.length; i++) {
        // pass the current number into cb()
        // if the cb(arr[i]) this returns true, then push arr[i] into a newArray
        if(cb(arr[i])){
            newArray.push(arr[i])
        }
    };
    return newArray;
}
console.log(filter([1,2,3,4,5,6], function(num){return num % 2 === 0 }))