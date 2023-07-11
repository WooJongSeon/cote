// Strategy

// Iterate over the length of abbr
// Compare characters at abbr[i] and word[j]
// If not the same, return false.
// If abbr[i] is a num, move i forward until abbr[i] is not a num.
// In this iteration, build up a variable num with each of the nums seen.
// Edge Case - If the 1st num seen is "0", it is invalid, return false.
// Move j forward Number(num)

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function (word, abbr) {
  // setup two pointers and current number
  let i = 0; // abbr 인덱스
  let j = 0; // word 인덱스
  let number = 0;

  // loop while the pointers are within the string bounds
  while (i < abbr.length && j < word.length) {
    // 인덱스는 당연히 길이보다 작다
    // if the abbr char is a number

    if (!isNaN(abbr[i])) {
      // 숫자가 맞는 경우엔
      // add the number to the previous number times 10
      // for example "12" will be 1 first then 10 + 2
      console.log("number ", number, " * 10", " abbr[i]: ", abbr[i]);
      number = number * 10 + Number(abbr[i]); // 누적시키는 로직

      // if the new number is zero return false for leading zeros
      if (number === 0) return false; // number가 0으로 시작했다는 뜻

      // increment the abbr pointer
      i++; // abbr을 다음 인덱스로
    }
    // if the number is greater than zero
    else if (number > 0) {
      // abbr이 문자열인 경우
      // move the word pointer by number spaces
      j += number; // word를 그간 수집한 숫자만큼 더한다
      // reset the number
      number = 0; // 수집한 숫자를 옮겼으니 number는 0으로 초기화한다.
    }
    // if the characters match
    else if (abbr[i] == word[j]) {
      // 문자열이 일치한다면 다음 인덱스로 둘다 증가
      // increment both pointers
      i++;
      j++;
    }
    // otherwise the characters don't match so return false
    else return false; // 문자열이 일치하지 않는다면 false
  }
  // the abbr is valid if the abbr pointer made it all the way through the string
  // and the word pointer plus any remaining number made it through the string
  return i === abbr.length && j + number === word.length; // 둘다 배열 길이보다 작은지 리턴
};

const res = validWordAbbreviation("internationalization", "i12iz4n");
// const res = validWordAbbreviation("apple", "a3e");

console.log("res ", res);
