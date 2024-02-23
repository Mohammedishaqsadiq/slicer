function sliceMyWordOrNumber(wordToSlice, beginningSlice, endingSlice) {
  for (let i = beginningSlice; i < endingSlice; i++) {
    resultWordToSlice += wordToSlice[i];
  }
  return resultWordToSlice;
}

let resultWordToSlice = "";
let wordToSlice = [1, 2, 3, 4, 5];
let beginningSlice = 0;
let endingSlice = 1;
console.log(sliceMyWordOrNumber(wordToSlice, beginningSlice, endingSlice));

console.log([1, 2, 3, 4].slice(0,1))
