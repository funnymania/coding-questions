const lookAndSay = (lines) => {
  let prevLine = [1]

  for (let i = 0; i < lines; i++) {
    let newLine = numConsecCharacters(prevLine)

    console.log(newLine)
    prevLine = newLine
  }
}

const numConsecCharacters = (arr) => {
  let result = []
  let repeatingChar
  for (let i = 0; i < arr.length; ) {
    repeatingChar = arr[i]
    let cnt = i
    while (cnt < arr.length && repeatingChar === arr[cnt]) {
      cnt += 1 
    }
    result.push( cnt - i, repeatingChar)

    i = cnt
  }

  return result
}

lookAndSay(50)