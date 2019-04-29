var a = function(a) {
  var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
  let arr_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr_sum += arr[i];
  }
  console.log(arr_sum);
};

a();
