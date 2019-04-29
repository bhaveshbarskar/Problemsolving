var a = function compare() {
  var alice = [17, 28, 30];
  var bob = [99, 16, 8];
  var result = [];
  var alice_credits = 0;
  var bob_credits = 0;
  for (let i = 0; i < 3; i++) {
    //compare alice and bob
    if (alice[i] > bob[i]) {
      //do something
      console.log("I am here");
      alice_credits++;
      console.log(alice_credits);
    } else if (alice[i] < bob[i]) {
      //do something
      bob_credits++;
    }
  }
  result.push(alice_credits);
  result.push(bob_credits);
  console.log(result);
};
a();
