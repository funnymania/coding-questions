var repeatedStringMatch = function (A, B) {
  let cnt
  let origA = A
  let newA = A
  for (cnt = 1; newA.length <= B.length + origA.length; cnt++) {
    if (newA.includes(B)) {
      return cnt;
    }

    newA += origA
  }

  if (newA.includes(B)) {
    return cnt;
  } else {
    return -1;
  }
};