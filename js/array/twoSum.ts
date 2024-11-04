/**
 * This function finds the indices of two numbers in the given array that add up to the target value.
 *
 * @param nums - The input array of numbers.
 * @param target - The target sum value.
 *
 * @returns An array containing the indices of the two numbers that add up to the target value.
 *          If no such pair exists, it returns `null`.
 *
 **/
function twoSum(nums: number[], target: number): any {
  let numToIndexMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numToIndexMap.hasOwnProperty(diff)) {
      return [i, numToIndexMap[diff]];
    }

    numToIndexMap[nums[i]] = i;
  }
  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
