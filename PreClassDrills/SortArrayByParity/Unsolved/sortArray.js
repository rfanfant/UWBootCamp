// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

function sortArray(arr){
    var evenArray = [];
    var oddArray = [];
    var newArray = [];
    // iterate around arr
    for (let i = 0; i < arr.length; i++) {
        // determine if the index i is an even or odd number
        // if the current index is divisble by 2 it will return a remainder of 0
        if(arr[i] % 2 === 0){
            // if even, push into evenArray
            evenArray.push(arr[i])
        }else{
            // else, push into oddArray
            oddArray.push(arr[i]);
        }
    }
        // concatenate our 2 arrays with even as our left array
        // newArray = evenArray.concat(oddArray);
        return [...evenArray, ...oddArray];

};

console.log(sortArray([3,1,2,4]));

