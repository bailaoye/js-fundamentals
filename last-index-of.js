function lastIndexOf (array, index) {
  let output = 0;
  let match = false;
  for (let i = array.length - 1; i >= output; i--) {
    if (array[i] === index) {
      output = i;
      match = true;
    }
  }
  if (match) {
    return output;
  }
  else {
    return -1;
  }
}



//Tests
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);