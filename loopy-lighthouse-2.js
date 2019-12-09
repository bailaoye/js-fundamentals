// Refer to below to call function!
// loopyLighthouse([range_start, range_end], [multiple_1, multiple_2], [word_1, word_2])

function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + words[1])
    }
    else if (i % multiples[0] === 0) {
      console.log(words[0])
    }
    else if (i % multiples[1] === 0) {
      console.log(words[1])
    }
    else {
      console.log(i)
    }
  }
}