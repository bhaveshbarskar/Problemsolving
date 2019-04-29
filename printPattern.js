var a = () => {
  var n = 4;
  var space = n - 1;

  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) console.log("A");
  }
};
a();


git init
git add README.md
git commit - m "first commit"
git remote add origin https://github.com/bhaveshbarskar/Problemsolving.git
git push - u origin master