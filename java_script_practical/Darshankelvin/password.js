let password = prompt("Enter Your Password");
let word = "kelvin";
if (password == null) {
  console.log("You Pressed Cancel Button");
} else if (password == word) {
  console.log(`You Enter Correct Password : ${word}`);
} else if (password != word) {
  while (password != word) {
    let retrieve = prompt("Enter Correct Password");
    if (retrieve == null) {
      console.log("You Pressed Cancel Button");
      break;
    } else if (retrieve == word) {
      console.log(`You Enter Correct Password : ${word}`);
      break;
    }
  }
}
// 1 == 1;
// 1 != 2;
