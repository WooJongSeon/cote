// /**
//  * @param {number[]} nums
//  * @param {number} lower
//  * @param {number} upper
//  * @return {number[][]}
//  */
// var findMissingRanges = function (nums, lower, upper) {
//   let numIdx = 0;
//   let rangeCount = nums[numIdx];
//   const rangeArr = [];
//   if (nums.length === 0) {
//     return [[lower, upper]];
//   }
//   if (nums.length === 1) {
//     if (lower < nums[0]) {
//       rangeArr.push([lower, nums[0] - 1]);
//     }
//     if (upper > nums[0]) {
//       rangeArr.push([nums[0] + 1, upper]);
//     }

//     return rangeArr;
//   }
//   if (nums[nums.length - 1] > lower) {
//     rangeArr.push([lower, nums[0]]);
//   }
//   while (rangeCount < upper && numIdx <= nums.length - 2) {
//     if (rangeCount === nums[numIdx + 1]) {
//       if (
//         !(
//           nums[numIdx + 1] - 1 === nums[numIdx] &&
//           nums[numIdx] + 1 === nums[numIdx + 1]
//         )
//       ) {
//         rangeArr.push([nums[numIdx] + 1, nums[numIdx + 1] - 1]);
//       }
//       numIdx++;
//     }
//     rangeCount++;
//   }
//   if (nums[nums.length - 1] < upper) {
//     rangeArr.push([nums[nums.length - 1] + 1, upper]);
//   }
//   return rangeArr;
// };

// const res = findMissingRanges([0, 1, 3, 50, 75], 0, 99);

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function (nums, lower, upper) {
  const rangeArr = [];
  if (nums.length === 0) {
    return [[lower, upper]];
  }

  if (lower < nums[0]) {
    rangeArr.push([lower, nums[0] - 1]);
  }
  let numIdx = 0;
  while (numIdx < nums.length - 1) {
    if (nums[numIdx + 1] - nums[numIdx] > 1) {
      rangeArr.push([nums[numIdx] + 1, nums[numIdx + 1] - 1]);
    }
    numIdx++;
  }
  if (nums[nums.length - 1] < upper) {
    rangeArr.push([nums[nums.length - 1] + 1, upper]);
  }
  return rangeArr;
};
const res = findMissingRanges([0, 1, 3, 50, 75], 0, 99);
console.log("res ", res);

// nums = [0,1,3,50,75], lower = 0, upper = 99
// nums[0]을 range count에 저장
// uppper까지 1씩 plus 하다가 nums의 다음 인덱스랑 같다면 range 생성
// 생성한 Range 는 배열에 추가하기

// nums =
// [1,2]
// lower =
// 0
// upper =
// 9
// Use Testcase
// Output
// [[3,9]]
// Expected
// [[0,0],[3,9]]
