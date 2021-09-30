function swap(arr, firstIndex, secondIndex) {
  var temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}
function bubbleSortAlgo(arraaytest) {
  var len = arraaytest.length,
    i,
    j,
    stop;
  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arraaytest[j] > arraaytest[j + 1]) {
        swap(arraaytest, j, j + 1);
      }
    }
  }
  return arraaytest;
}
console.log(bubbleSortAlgo([11, 60, 12, 15, 95, 44, 61]));
