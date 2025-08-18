// Problem 1
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("Touhid"));
console.log(reverseString("Bangladesh"));

// Problem 2
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(reverseString("hello"));
console.log(reverseString("Touhid"));
console.log(reverseString("Bangladesh"));

// 3rd Problem
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("tamim"));

// 4th problem
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(findMax([5, 1, 9, 3]));
console.log(findMax([10, 20, 5]));
