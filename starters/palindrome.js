// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

var isPalindrome = function (x) {
  // if (x < 0) return false;  ----> to save time for calculation if negative num discovered
  
  // return x === +x.toString().split("").reverse().join(""); ---> original solution

  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(10);
console.log(res); // false

// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"
