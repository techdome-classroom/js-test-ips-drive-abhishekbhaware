function longestSubstring(s) {

    let start = 0;
    let end = 0;
  
    
    const charSet = new Set();
  
   
    let maxLength = 0;
  
    
    while (end < s.length) {
     
      if (charSet.has(s[end])) {
        charSet.delete(s[start]);
        start++;
      } else {
        
        charSet.add(s[end]);
        end++;
  
       
        maxLength = Math.max(maxLength, charSet.size);
      }
    }
  
    
    return maxLength;

    // Implementation of longestSubstring function
}

// Test the function
console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));  // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));  // Output: 3
console.log(lengthOfLongestSubstring(""));  // Output: 0

module.exports = { longestSubstring };
