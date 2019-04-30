var a = () => {
  var arr = [1, 2,3,4,5];

  var min_sum = 0;
  var max_sum = 0;
  arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    min_sum += arr[i];
    max_sum += arr[i + 1];
  }
  console.log(max_sum);
};
a();
