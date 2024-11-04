/**
 * Sorts an array of numbers using the merge sort algorithm.
 *
 * @param nums - The array of numbers to be sorted.
 * @returns The sorted array of numbers.
 *
 * @remarks
 * This function implements the merge sort algorithm to sort an array of numbers.
 * It divides the array into two halves, recursively sorts each half, and then merges
 * the sorted halves back together.
 *
 * The time complexity of this function is O(n log n), where n is the length of the input array.
 * The space complexity is O(n), as the function creates new arrays during the sorting process.
 *
 **/
function sortArray(nums: number[]): number[] {
  if (!nums || nums.length <= 1) return nums;

  // bisect
  const pivot = Math.floor(nums.length / 2);
  const leftSubarray = nums.slice(0, pivot);
  const rightSubarray = nums.slice(pivot);

  // recurse
  const leftResult = sortArray(leftSubarray);
  const rightResult = sortArray(rightSubarray);

  // merge
  const result = [];
  while (leftResult.length && rightResult.length) {
    if (leftResult[0] < rightResult[0]) {
      result.push(leftResult.shift());
    } else {
      result.push(rightResult.shift());
    }
  }
  return [...result, ...leftResult, ...rightResult];
}
