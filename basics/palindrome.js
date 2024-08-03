/*
palindrome number  front = reverse
*/

var isPalindrome = function(x) {
    let num = x, reverse = 0;

    while(num > 0) {
        let lastDigit = num%10;
        reverse = reverse*10 + lastDigit;
        num = Math.floor(num/10);
    }

    return x == reverse;
}

console.log(isPalindrome(1212));
