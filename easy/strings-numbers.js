// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output: 321
// Example 2:
// Input: -123
// Output: -321
// Example 3:
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedNum = 0;
    let lastDigit;
    while (x != 0) {
      lastDigit = x % 10;
      reversedNum = reversedNum * 10 + lastDigit;
      x = (x / 10) >> 0;
    }
    if (reversedNum < (-2) ** 31 || reversedNum > 2 ** 31 - 1) {
      return 0;
    }
    return reversedNum;
  };
  
//   Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Example 1:
// Input: 121
// Output: true
// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:
// Coud you solve it without converting the integer to a string?
  var isPalindrome = function(x) {
    return x === reverse(x);
  };
  // let nums = [0, 0, 3, 4];
  // let target = 0; // [1,2]
  // console.log(twoSum(nums, target));
  console.log(isPalindrome(-121));