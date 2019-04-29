var a = () => {
  var n = 6;

  for (let i = 1; i <= n; i++) {
    for (let j = n - 1; j >= i; j--) {
      process.stdout.write(" ");
    }

    for (let z = 1; z <= i; z++) process.stdout.write("#");
    process.stdout.write("\n");
  }
};
a();
