function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  if (!root) return null;

  let res = root.val;
  if (target < root.val) res = closestValue(root.left, target);
  else if (target > root.val) res = closestValue(root.right, target);

  let math1 = Math.abs(root.val - target),
    math2 = Math.abs(res - target);

  // check if diff is small, then asign root.val to res;
  // if the diff is even, find out the smallest number between res and root.val
  if (math1 < math2) res = root.val;
  else if (math1 == math2) res = Math.min(root.val, res);

  // if the target is smaller than the smalles node inside root, the res will be null, then return root.val
  return res === null ? root.val : res;
  // let answer = -1;
  // let answerIdx = 0;

  // console.log("root val ", root.val);
  // for (let i = 0; i < root.length; i++) {
  //   const numGap = Math.abs(root[i] - target);

  //   if (answer === -1) {
  //     answer = numGap;
  //     answerIdx = i;
  //   }
  //   if (answer > numGap) {
  //     answer = numGap;
  //   }
  // }
  // return root[answerIdx];
};

const res = closestValue([4, 2, 5, 1, 3], 3.714286);
console.log("res ", res);
