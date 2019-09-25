/**
 * Given an out of order array, containing no duplicates, and containing numbers 1..arr.length,
 * find minimum number of swaps to bring it into numerical order.
 * 
 * ex 1423, how many swaps to get this to 1234 
 * 
 * Commented out is my original naive solution. 
 */
function minimumSwaps(arr) {
  let swapNum = 0
  let tmp = 0

  // for (let i = 1; i < arr.length + 1; i++) {
  //   let testIndex = arr.indexOf(i)
  //   if (testIndex != i - 1) {
  //     tmp = arr[i - 1]
  //     arr[i - 1] = arr[testIndex]
  //     arr[testIndex] = tmp 
  //     swapNum += 1
  //   }
  // }

  for (let i = 0; i < arr.length;) {
    if (arr[i] != i + 1) {
      tmp = arr[arr[i] - 1]
      arr[arr[i] - 1] = arr[i]
      arr[i] = tmp
      swapNum += 1
    } else {
      i += 1
    }
  }

  return swapNum
}