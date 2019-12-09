function range(start, end, step) {
  let i = start;
  let output = [start];
  while (i < end) {
    i = i + step;
    output.push(i);
  }
  return output;
}