/**
 * Checks if a given string is a palindrome, ignoring non-alphanumeric characters and case.
 *
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 * This function removes any non-alphanumeric characters and converts the string to lowercase
 * before checking if it is a palindrome.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} - Returns `true` if the input string is a palindrome, `false` otherwise.
 *
 * @example
 * isPalindrome("A man, a plan, a canal: Panama"); // returns true
 * isPalindrome("race a car"); // returns false
 */
const isPlaindrome = (str: string) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let start = 0;
  let end = cleanStr.length - 1;
  while (start < end) {
    if (cleanStr[start] !== cleanStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log(isPlaindrome("A man, a plan, a canal: Panama"));
