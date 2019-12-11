/** * Given a string S and a string T, find the minimum window in S which will contain all the
 * characters in T in complexity O(n).
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) { 
  const topMap = {} 

  // Index characters of t into a map 
  for (let char of t) { 
    topMap[char] = 1 
  }  

  let start = 0 
  let end = 0 
  let cnt = topMap.keys().length 

  // Grow end until cnt equals 0, winMap will be the map of the window
  let winMap = {}
  for (key in topMap.keys()) {
    winMap[key] = 0
  }

  while (end != s.length) {
    if (topMap[s.charOf(end)] !== undefined) { 
      if (winMap[s.charOf(end)] === 0) {
        cnt -= 1
      }

      winMap[s.charOf(end)] += 1
    }
      
    if (cnt === 0) {
      break;
    }

    end += 1
  }
  
  if (cnt !== 0) {
    return ''
  }
  
  let minStart = start
  let minEnd = end

  let resStr = ''
  while (end < s.length) {
    let sChar = s.charOf(start)
    let eChar = s.charOf(end)

    if (winMap[sChar] !== undefined) {
      winMap[sChar] -= 1
    }

    if (winMap[sChar] )

    if (end - start < minEnd - minStart) {
      minStart = start
      minEnd = end
    }

    start += 1
    end += 1
  }
  
  return s.slice(start, end)
};