const assert = require('assert')

/**
 * Return count of numbers between some range which have at least
 * one instance of adjacent duplicate values (ie 110894) AND
 * have all values from ltr NOT decreasing in value (ie 1124559)
 */
function secureContainer(begin, end) {
  const beginStr = `${begin}`
  const endStr = `${end}`

  let result = 0
  for (let i = begin; i <= end; i++) {
    if (i === 204445) {
      console.log('butt');
    }
    if (hasOneAdjacentCharacterAndIncreasesLTR(`${i}`)) {
      result += 1
    }    
  }

  return result
}

/**
 * Only works on inputs with >= 3 digits
 */
function hasOneAdjacentCharacterAndIncreasesLTR (str) {
  if (str.length < 3) {
    return false
  }

  let doublesCount = 0
  let nextChar = str.charAt(1)
  let nextNextChar = str.charAt(2)
  let isIncreasing = true
  for (let i = 0; i < str.length - 2; i += 1) {
    let char = str.charAt(i)
    nextChar = str.charAt(i+1)
    nextNextChar = str.charAt(i + 2)
    if (char === nextChar) {
      if (char !== nextNextChar) {
        doublesCount += 1
      } else {
        i += 2
      }
    } else if (char > nextChar) {
      isIncreasing = false
    }

  }

  // Cover the end two
  if (str.charAt(str.length - 1)
   && str.charAt(str.length - 2)
   && (str.charAt(str.length - 3) !== str.charAt(str.length - 1) )
  ) {
    doublesCount += 1 
  }

  return doublesCount > 0 && isIncreasing
}

console.log(secureContainer(197487, 673251))
