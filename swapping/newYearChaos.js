// Situation: Line of people represented as an array, index 0 being the
// front of the line. Anyone can bribe the person in front of them to 
// switch places. They may only bribe two people max, otherwise print
// 'Too chaotic'. Anyone can be bribed any number of times. Return the 
// number of swaps required to get a line of people arranged in order 1...n 
// into the jumbled up state represented in 'q'.

// There are not many states in the problem to consider here, once you
// understand the nature of bribes and realize that anything two greater
// than its position is illegal. 
// Optimizing leads gracefully from O(n**2) to O(n). 
function minimumBribes(q) {
  let tmp = 0
  let tmp2 = 0
  let swpNum = 0
  let testIndex = 0

  for (let i = q.length; i > 0; i--) {
    let searchFrom = i - 3 < 0 ? 0 : i - 3;
    testIndex = q.indexOf(i, searchFrom)
    if (testIndex == -1) {
      console.log('Too chaotic')
      return;
    }

    if (q[testIndex] - (testIndex + 1) == 2) {
      tmp = q[testIndex + 2]
      tmp2 = q[testIndex + 1]
      q[testIndex + 2] = q[testIndex]
      q[testIndex + 1] = tmp
      q[testIndex] = tmp2
      swpNum += 2
    } else if (q[testIndex] - (testIndex + 1) == 1) {
      tmp = q[testIndex + 1]
      q[testIndex + 1] = tmp
      q[testIndex] = tmp
      swpNum += 1
    }
  }

  console.log(swpNum)
}