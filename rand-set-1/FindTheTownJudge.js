var findJudge = function (N, trust) {
  // Create a hashmap
  let hm = new Map()
  let trustless = []

  // Loop through tuples, to note all who have some trust.
  for (let relation of trust) {
    if (hm.get(relation[0]) == undefined) {
      hm.set(relation[0], true)
    }
  }

  // Loop through hashmap to note if any have no trust. 
  for (let i = 0; i < N; i++) {
    if (hm.get(i) == undefined) {
      trustless.push(i)
    }
  }

  if (trustless.length == 0) {
    return -1;
  }

  // Loop through trusts to see if any of these trustless
  // are trusted by everyone but themselves.
  for (let tl of trustless) {
    for (let i = 0; i < trust.length; i++) {
      if (trust[i][1] != tl && trust[i][0] != tl) {
        trustless.shift(); // This is not the judge. 
        break;
      }
    }
  }

  return trustless.length == 1
    ? trustless[0]
    : -1;
};