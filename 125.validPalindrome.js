// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isPalindrome = function (s) {
//   const lowerS = s.toLowerCase(); // 정규표현식으로 숫자, 알파벳으로 전환하면 아스키코드표를 사용하지 않을 수 있다.
//   const arr = [];
//   const backwardArr = [];
//   for (let i = 0; i < lowerS.length; i++) { // 숫자거나 알파벳인 경우에 배열에 추가
//     const charCode = lowerS[i].charCodeAt();
//     if (
//       (97 <= charCode && charCode <= 122) ||
//       (48 <= charCode && charCode <= 57)
//     ) {
//       arr.push(lowerS[i]);
//       backwardArr.push(lowerS[i]);
//     }
//   }
//   let index = 0;
//   while (arr.length) {
//     if (arr.pop() !== backwardArr[index]) {
//       return false;
//     }
//     index++;
//   }
//   return true;
// };

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^0-9a-z]/gi, "").toLowerCase(); // 정규표현식을 활용해서 문자, 숫자
  let start = 0;
  let end = str.length - 1;
  while (start <= end) {
    if (str[start] !== str[end]) {
      // 앞에서부터, 뒤에서부터 읽는데 둘이 다르면 걍 false 아니면 true
      return false;
    }
    start++; // 맨 앞부터
    end--; // 맨 뒤부터
  }
  return true;
};
// 아스키 코드로 A~Z인지 확인 65 90
// 아스키 코드로 a~z인지 확인 97 120
// 앞에서 뒤에서 문자 읽기
// 다르면 false 리턴
// 맨 마지막에 true 리턴

const res = isPalindrome(":::");
console.log("res ", res);
// /[^0-9]/g : '숫자0~9'가 아닌 것을 모두 찾는다.
// 대괄호 앞에서 ^을 쓰면 해당하지 않는 것을 모두 찾는다.
