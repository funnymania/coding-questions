const assert = require('assert').strict

function findRectangle(image) {
  let topLeft = {};
  let bottomRight = {};
  let scanningDown = false;
  let scanRightAmount = 1;
  let scanningRight = false;

  // Scan until first zero.
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[0].length; j++) {
      if (image[i][j] == 0) {
        topLeft.x = i;
        topLeft.y = j;
        scanningDown = true;
        break;
      }
    }
    if (scanningDown) {
      break;
    }
  }

  // Scan down until row does not contain zero.
  let toScanRightFrom = {};
  toScanRightFrom.x = topLeft.x;
  toScanRightFrom.y = topLeft.y;
  for (let i = topLeft.x + 1; i <= image.length; i++) {
    if (image[i] == undefined || image[i][topLeft.y] != 0) {
      toScanRightFrom.x = i - 1;
      break;
    }
  }

  // Scan right until column does not contain zero. 
  for (let j = toScanRightFrom.y; j <= image[0].length; j++) {
    if (image[toScanRightFrom.x][j] != 0 || image[toScanRightFrom.x][j] == undefined) {
      bottomRight.x = toScanRightFrom.x;
      bottomRight.y = j - 1;
      break;
    }
  }

  let result = []
  result.push(topLeft)
  result.push(bottomRight)
  return result;
}

// Test cases.
var image1 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

var image2 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];


var image3 = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0],
];


var image4 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
];


var image5 = [
  [0],
];