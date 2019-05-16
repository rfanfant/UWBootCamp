var result = binarySearch([1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784], 77);
console.log(result);

// first iteration
// currentIndex = 6
// dataset -> [1, 23, 43, 56, 77, 89, 211]
// currentElement = 211
// 211 > 77

// 2nd iteration 
// currentIndex = 2
// dataset -> [1, 23, 43, 56, 77, 89]
// currentElement = 43
// 43 < 77

// 3rd iteration
// dataset -> [56, 77, 89]
// currentIndex = 4
// currentElement = 77

// 77 === 77


 binarySearch = (numbersArr, searchElement) =>  {

  // Set some starting values.
  var currentElement;
  var currentIndex;
  var maxIndex = numbersArr.length - 1;
  var minIndex = 0;
  var count = 0;

  // This is the main loop.
  while (minIndex <= maxIndex) {
    
    // Get a position near the middle.
    currentIndex = Math.floor((minIndex + maxIndex) / 2);

    // Get that element.
    currentElement = numbersArr[currentIndex];

    // Test it.
    if (currentElement < searchElement) {
      // if it's less than we are looking for, look *above* this value.
      minIndex = currentIndex + 1;
      count++;
      console.log("Count: ", count)
    }
    else if (currentElement > searchElement) {

      // If it's more than we are looking for, look *below* this value.
      maxIndex = currentIndex - 1;
      count++;
      console.log("Count: ", count)
    }
    else {
      // We found it; return the index.
      return currentIndex;
    }
  }
  return false;
}
