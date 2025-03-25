function repeating(w) {
  // console.log(w)
  let arr = [...w]
  console.log(arr)
  let count = 0;
  let rw = [];
  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(arr[i])
    if (i = arr.length - 1) { break; } else {
      for (let j = i + 1; j < arr.length - 1; j++) {
        // console.log("Inner loop reached")
        // console.log(arr[j])
        console.log(count)
        if (arr[i] === arr[j]) {
          count++;
          rw.push(arr[i]);
        }
      }
    }
  }
  console.log("Number of repeated characters are:" + count)
  if (count > 0) { return rw; }
}

console.log(repeating("Walede"));
