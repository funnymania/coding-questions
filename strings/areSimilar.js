const oneEditApart = (s1, s2) => {
  // Create a map of character occurrences of strings
  let map1 = mapCharOccurences(s1)
  let map2 = mapCharOccurences(s2)

  let editCount = 0
  let stack = []
  // if a key is present in one but not the other, edit += v
  for ([k,v] of Object.entries(map1)) {
    if (map2[k] === undefined) {
      editCount += v
    }
  }

  for ([k,v] of Object.entries(map2)) {
    if (map1[k] === undefined) {
      editCount += v
    }
  }

  if (editCount !== 0) return false

  // for ([k,v] of Object.entries(map1)) {
  //   if (map1[k] )
  // }
  // if a key is present in both, is the number off?
  //    if so, is stack empty? push char for every num off,
  //    edit +=1 for every push
  //    if so, and stack non empty, pop num off times.
  //        if stack 
  // else 
  editCount += stack.length

  return editCount === 1
}

const genCommonMap = (m1, m2) => {
  let dmap = {}
  for ([k,v] of Object.entries(m1)) {
    if (m2[k] !== undefined) {
      dmap[k] = Math.abs(v - m2[k])
    } else {
      dmap[k] = v
    }
  }  

  for ([k,v] of Object.entries(m2)) {
    if (dmap[k] === undefined) {
      dmap[k] = v
    }
  }  

  return dmap
}

const mapCharOccurences = (str) => {
  let map = {}
  for (let char of str) {
    if (map[char] === undefined) {
      map[char] = 1
    } else {
      map[char] += 1
    }
  }
 
  return map
}

function rotLeft(a, d) {
  let amt = d % a.length
  let int = /* a.slice(amt, a.length) + */ a.slice(0, amt)
  console.log(int)

  return int
}

console.log(
  rotLeft([1,2,3,4,5], 4)
)
