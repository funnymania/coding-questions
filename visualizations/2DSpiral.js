const assert = require('assert')

const spiral = (n) => {
  let out = Array(n)

  for (let i =0; i < n; i+=1) {
    out[i] = Array(n).fill(0)
  }

  let dirX = [1,0,-1,0]
  let dirY = [0,1,0,-1]
  let counter = 1
  let sqCount = 0
  let X = 0
  let Y = 0
  let j = 0

  while (counter <= n ** 2) {
    if (n - sqCount * 2 - 1 === 0) {
      out[sqCount + Y][sqCount + X] = counter
      break
    }

    for (let across = 0; across < n - sqCount * 2 - 1; across++) {
      out[sqCount + Y][sqCount + X] = counter
      X += dirX[j] 
      Y += dirY[j]
      counter += 1
    }

    j += 1  
    if (j > 3) {
      j = 0
      sqCount += 1
    }
  }

  return out
}

console.table(
  spiral(1)
)
