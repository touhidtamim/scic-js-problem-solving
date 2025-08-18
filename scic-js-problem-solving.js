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

// 5th problem
function removeDuplicates(arr) {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 8, 8]));

// 6th problem
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([3, 8, 2, 5]));
console.log(sumArray([5, 7, 4, 9]));

// 7th problem
function findEvens(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

console.log(findEvens([1, 2, 3, 4, 5, 6]));

// 8th problem
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(capitalizeWords("hello tamim"));
