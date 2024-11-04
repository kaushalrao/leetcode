/**
 * Reverses the order of characters in the given string array in-place.
 *
 * @param s - The string array to be reversed. The array is modified directly.
 * @returns {void} - The function does not return a value.
 *
 **/
function reverseString(s: string[]): void {
  let j = s.length - 1;
  let i = 0;

  while (i < j) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    j--;
    i++;
  }
}
