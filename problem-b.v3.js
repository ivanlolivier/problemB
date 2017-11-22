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
    median = prevNumber();
    height = 1;
  }
}

function moveRight() {
  if (height < cookies[median]) {
    height++;
  } else {
    median = nextNumber();
    height = 1;
  }
}

function nextNumber() {
  var i = median + 1;
  while (true) {
    if (cookies[i]) {
      return i;
    }
    i++;
  }
}

function prevNumber() {
  var i = median - 1;
  while (true) {
    if (cookies[i]) {
      return i;
    }
    i--;
  }
}