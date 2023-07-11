/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.movingArr = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.movingArr.length >= this.size) {
    // 배열의 크기가 size 보다 같거나 크다면, 1개 제거 후에 push 해야함
    this.movingArr.shift();
    this.movingArr.push(val);
  } else {
    // 그렇지 않다면 그냥 Push
    this.movingArr.push(val);
  }
  // 배열 원소의 평균을 계산해서 리턴하기
  const res = this.movingArr.reduce((prev, cur) => prev + cur);
  return res / this.movingArr.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5);

// window의 size를 초기화한다.
//
