 // Given a non-empty array of integers, every element appears twice except for one. Find that single one.

 // Example
 // Input: [2, 1, 2]
 // Output: 1

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// singleNumber(n) TIME COMPLEXITY --> O(n)

 // ====== SOLUTION 1 ======= //
 // * with .splice()

function singleNumber(arr){
    // console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        // arr[i] = 2
        var currentNum = arr[i]
        // remove the current element from the array using .splice()
        // .splice() returns the element removed, but it manipulates the value of the original array by removing the specificed index

        arr.splice(i, 1);
        // console.log(arr);  =>  [1, 2]  
        if(!arr.includes(currentNum)){
            return currentNum;
        }
        // push the currentNum back into the array
        arr.push(currentNum)
        // console.log(arr) output => [2, 1, 2]  
    }

}

console.log(singleNumber([2, 5, 2, 5, 9]))

// ======= SOLUTION 2 ======== //
 // * without .splice()

function singleNumber(arr){

    for (let i = 0; i < arr.length; i++) {
        var currentNum = arr[i];
        // set current index value equal to null
        arr[i] = null;
        // console.log(arr) output => [null, 1, 2]

        // if the currentNum is not included in the array when we check it against
        if(!arr.includes(currentNum)){
            return currentNum;
        }
        // else, currentNum is found at another index in the array
        // reassign the value of the current index to currentNum
        arr[i] = currentNum;
    }

}

console.log(singleNumber([2, 5, 2, 5, 9]))
