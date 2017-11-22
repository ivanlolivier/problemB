var line;

var cookies = [];
var qty = 0;
var median = 0;
var height = 0;
var cookie = 0;

while (line = readline()) {
  if (line === '#') {
    print(median);

    cookies[median] = cookies[median] - 1;
    qty--;

    (qty % 2 === 0)
        ? moveRight()
        : moveLeft();
  } else {
    cookie = parseInt(line, 10);

    cookies[cookie] = cookies[cookie] === undefined
        ? 1
        : cookies[cookie] + 1;

    qty++;

    if (qty === 1) {
      median = cookie;
      height = 1;
      continue;
    }

    if (cookie >= median && qty % 2 === 0) {
      moveRight();
    }

    if (cookie < median && qty % 2 === 1) {
      moveLeft();
    }
  }
}

/*************
 * FUNCTIONS *
 *************/

function moveLeft() {
  if (height > 1) {
    height--;
  } else {
    median = prevNumber(cookies, median);
    height = 1;
  }
}

function moveRight() {
  if (height < cookies[median]) {
    height++;
  } else {
    median = nextNumber(cookies, median);
    height = 1;
  }
}

function nextNumber(array, from) {
  for (var i = from + 1; i < array.length; i++) {
    if (array[i]) {
      return i;
    }
  }
}

function prevNumber(array, from) {
  for (var i = from - 1; i >= 0; i--) {
    if (array[i]) {
      return i;
    }
  }
}