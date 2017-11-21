let line;
const cookies = [];
let length = 0;

while (line = readline()) {
    if (line === '#') {
        let index = (length % 2 === 0)
            ? length / 2
            : (length + 1) / 2 - 1;

        print(cookies[index]);

        cookies.splice(index, 1);
        length--;
    } else {
        binaryInsert(parseInt(line, 10), cookies, 0, length - 1);
        length++;
    }
}

function binaryInsert(value, array, start, end){
    if (array.length === 0){
        return array.push(value);
    }
    
    if (value >= array[end]) return array.splice(end + 1, 0, value);
    if (value <= array[start]) return array.splice(start, 0, value);

    const middleIndex = start + Math.floor((end - start)/2);

    if (value === array[middleIndex]) return array.splice(middleIndex, 0, value);

    if(value < array[middleIndex]){
        return binaryInsert(value, array, start, middleIndex - 1);
    }

    if(value > array[middleIndex]){
        return binaryInsert(value, array, middleIndex + 1, end);
    }
}
