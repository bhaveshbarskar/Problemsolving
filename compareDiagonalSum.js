var a = () => {
  var arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
  let sum_of_left = 0;
  let sum_of_right = 0;
  let diagonal_difference = 0;
  //left sum
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (row === col) {
        sum_of_left += arr[row][col];
      }
      if (row + col === arr.length - 1) {
        sum_of_right += arr[row][col];
      }
    }
  }
  diagonal_difference = Math.abs(sum_of_left - sum_of_right);
  console.log(diagonal_difference);
};
a();
