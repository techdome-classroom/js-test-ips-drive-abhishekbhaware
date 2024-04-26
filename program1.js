function smallestMissingPositiveInteger(nums) {

  
  const numSet = new Set(nums.filter(num => num > 0));


  let smallestMissingPositive = 1;


  while (true) {
      if (!numSet.has(smallestMissingPositive)) {
          return smallestMissingPositive;
      }
      smallestMissingPositive++;
  }

    // Implement the function smallest_missing_positive_integer
  
  }
  
  module.exports = smallestMissingPositiveInteger;
  // Test the function
console.log(smallestMissingPositiveInteger([3, 4, -1, 1])); // Output: 2
console.log(smallestMissingPositiveInteger([1, 2, 0])); // Output: 3
console.log(smallestMissingPositiveInteger([-1, -3, 4, 2])); // Output: 1
