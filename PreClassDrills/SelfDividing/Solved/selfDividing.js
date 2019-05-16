
// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

// Example 1:
// Input: 
// left = 1, right = 25
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22, 24]

var selfDividingNumbers = function(left, right) {
    // declare variable to hold numbers
    var output = [];
    // if left is less than 10
    if(left < 10){
        // itereate and push numbers 1 - left into our output array because we already know those numbers are self dividing numbers
    
        for(var i=left; i < 10;i++){
            output.push(i);
        }
        // output => [1, 2, 3, 4, 5, 6, 7, 8, 9]
        
        for(var i=10; i < right + 1;i++){
            var selfDiv = true;
            var currentNum = i.toString();
            for(var k = 0; k < currentNum.length; k++){
                if(i % parseInt(currentNum[k]) !== 0){
                    selfDiv = false;
                }
            
            }
            if(selfDiv){
                output.push(i);
            }
    
        }
    }else{
    
        for(var i=left; i < right + 1;i++){
            var selfDiv = true;
            var currentNum = i + '';
            for(var k = 0; k < currentNum.length; k++){
                if(i % parseInt(currentNum[k]) !== 0){
                    selfDiv = false;
                }
            
            }
            if(selfDiv){
                output.push(i);
            }
    
        }
    
    }
    
    
    
        return output;
    };