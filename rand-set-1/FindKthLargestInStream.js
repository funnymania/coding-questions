/**
 * @param {number} k
 * @param {number[]} nums
 */
let KthLargest = function (k, nums) {
  this.kthLarge = k
  this.listOfStream = nums.sort((a, b) => a - b)
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {
  if (val < this.listOfStream[this.listOfStream.length - this.kthLarge]) {
    return this.listOfStream[this.listOfStream.length - this.kthLarge]
  }

  // TODO: This should be a binary search, pretty sure findIndex is O(n) 
  let indexToInsertInto = this.listOfStream.findIndex((el) =>
    el > val
  )

  if (indexToInsertInto == -1) {
    indexToInsertInto = this.listOfStream.length
  }

  this.listOfStream.splice(indexToInsertInto, 0, val)

  return this.listOfStream[this.listOfStream.length - this.kthLarge]
};
function iterativeWithoutMemo(n) {
  if (n == 0) return 0
  if (n == 1) return 1
  let a = 0
  let b = 1
  let result = 0
  let cnt = 2
  while (cnt <= n) {
    result = a + b
    a = b
    b = result
    cnt += 1
  }
  return result
}


console.log(
  iterativeWithoutMemo(7)
)

let k = 3;
let arr = [4, 5, 8, 2];
let kthLargest = new KthLargest(3, arr);
console.log(kthLargest.add(3))   // returns 4
console.log(kthLargest.add(5))  // returns 5
console.log(kthLargest.add(10))  // returns 5
console.log(kthLargest.add(9))   // returns 8
console.log(kthLargest.add(4))   // returns 8