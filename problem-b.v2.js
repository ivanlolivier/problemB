var line;

var right = [];
var left = [];

var leftLength = 0;
var rightLength = 0;

var cookie;

while (line = readline()) {

  if (line === '#') {
    print(right[0]);

    if (leftLength >= rightLength) {
      right[0] = left.pop();
      leftLength--;
      continue;
    }

    right.splice(0, 1);
    rightLength--;
    continue;
  }

  cookie = parseInt(line, 10);

  if (rightLength === 0) {
    right.push(cookie);
    rightLength++;
    continue;
  }

  if (cookie >= right[0]) {
    binaryInsert(cookie, right, 0, rightLength - 1);
    rightLength++;
  } else {
    binaryInsert(cookie, left, 0, leftLength - 1);
    leftLength++;
  }

  if (leftLength > rightLength) {
    right.splice(0, 0, left.pop());
    rightLength++;
    leftLength--;
    continue;
  }

  if (rightLength >= leftLength + 2) {
    leftLength = left.push(right.splice(0, 1)[0]);
    rightLength--;
  }
}

function binaryInsert(value, array, start, end) {
  if (array.length === 0) {
    return array.push(value);
  }

  if (value <= array[start]) return array.splice(start, 0, value);
  if (value >= array[end]) return array.splice(end + 1, 0, value);

  var middleIndex = start + Math.floor((end - start) / 2);

  if (value === array[middleIndex]) return array.splice(middleIndex, 0, value);

  if (value < array[middleIndex]) {
    return binaryInsert(value, array, start, middleIndex - 1);
  }

  if (value > array[middleIndex]) {
    return binaryInsert(value, array, middleIndex + 1, end);
  }
}
