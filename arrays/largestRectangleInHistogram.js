/// https://leetcode.com/problems/largest-rectangle-in-histogram/

// Linear O(n * |unique values in heights|)
var largestRectangleArea = function(heights) {
  let max = 0
  let highestValue = 0
  let set = new Set(heights)
  
  for (let i of set) {
    let relativeHighest = 0
    let currentHighest = 0
    for (let bar of heights) {
      if (bar >= i) {
        currentHighest += i
      } else {
        if (currentHighest > relativeHighest) {
          relativeHighest = currentHighest
        }
        
        currentHighest = 0
      }
    }
    
    if (currentHighest > relativeHighest) {
      relativeHighest = currentHighest
    }
    
    if (relativeHighest > max) {
      max = relativeHighest
    }
  }
  
  return max
};

// O(10^4 * n)
let linearTimes104 = function(arr) {
  let max = 0
  let highestValue = 0
  // let set = new Set(heights)
  for (bar of heights) {
    if (bar > highestValue) {
      highestValue = bar
    }
  }
  
  for (let i = highestValue; i > 0; i--) {
    let relativeHighest = 0
    let currentHighest = 0
    for (let bar of heights) {
      if (bar >= i) {
        currentHighest += i
      } else {
        if (currentHighest > relativeHighest) {
          relativeHighest = currentHighest
        }
        
        currentHighest = 0
      }
    }
    
    if (currentHighest > relativeHighest) {
      relativeHighest = currentHighest
    }
    
    if (relativeHighest > max) {
      max = relativeHighest
    }
  }
  
  return max
}

let bruteForceN2 = function(arr) {
  let max = 0
    heights.forEach((bar, i) => {
      let curArea = 0
      let k = i
      let j = heights[k]
      while (j !== 0) {
        curArea = 0
        k = i
        while (k < heights.length) {
          if (heights[k] >= j) {
            curArea += j
          } else {
            break
          }

          k += 1
        }

        if (curArea > max) {
            max = curArea
        }

        j -= 1
      }
  })
  
  return max
}

export { largestRectangleArea }
