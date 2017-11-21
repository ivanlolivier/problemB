var line;

var rear = [];
var front = [];

var cookie;
var h;
var num1 = 0;
var num2 = 0;

while (line = readline()) {
  if (line === '#') {
    print(rear.pop());
    num2--;

    if (num1 > num2) {
      //rear.push(front.pop());
      binaryInsert(front.pop(), rear);
      num1--;
      num2++;
    }

  } else {
    cookie = parseInt(line, 10);

    if (num2 === 0 || cookie >= rear[rear.length - 1]) {
      //rear.push(cookie);
      binaryInsert(cookie, rear);
      num2++;
    } else {
      //front.push(cookie);
      binaryInsert(cookie, front);
      num1++;
    }
    if (num1 > num2) {
      //rear.push(front.pop());
      binaryInsert(front.pop(), rear);
      num2++;
      num1--;
    }
    if (num2 >= num1 + 2) {
      front.push(rear.pop());
      binaryInsert(rear.pop(), front);
      num1++;
      num2--;
    }
  }

  print('rear: ');
  printArray(rear);
  print('front: ');
  printArray(front);
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

function printArray(array) {
  print('[' + array.join(', ') + ']');
}
