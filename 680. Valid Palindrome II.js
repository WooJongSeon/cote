/**
 * @param {string} s
 */
function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

/**
 *
 * @param {string} s
 * @returns
 */
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // 원래 다르면 false여야 하는데 여기서는 하나 제거 했을때
      // 가능한지를 봐야한다 가능하다면 true 리턴
      // 왼쪽 포인터의 문자를 제거한 경우 팰린드롬 여부 확인
      const sub1 = s.substring(left + 1, right + 1);
      // 오른쪽 포인터의 문자를 제거한 경우 팰린드롬 여부 확인
      const sub2 = s.substring(left, right);
      console.log("left ", left);
      //
      return isPalindrome(sub1) || isPalindrome(sub2);
    }
    left++;
    right--;
  }

  return true;
}

const res = validPalindrome("tebbemebbet");
console.log("res ", res);

// This leaves us two scenarios:

// s is a palindrome - great, we can just return true.

// Somewhere in s, there will be a pair of mismatched characters.
// We must use our allowed deletion on one of these characters.
// Try both options - if neither results in a palindrome, then return false.
// Otherwise, return true. We can "delete" the character at j by moving our bounds to (i, j - 1).
// Likewise, we can "delete" the character at i by moving our bounds to (i + 1, j).
