var a = () => {
  var arr = [-4, 3, -9, 0, 4, 1];
  var count_positive = 0;
  var count_negative = 0;
  var count_zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count_positive++;
    } else if (arr[i] < 0) {
      console.log(arr[i]);
      count_negative++;
    } else count_zero++;
  }

  console.log((count_negative / arr.length).toPrecision(6));
};
a();
