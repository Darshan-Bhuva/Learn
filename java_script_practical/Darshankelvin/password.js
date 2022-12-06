let password = prompt("Enter Your Password");
let word = "kelvin";

// if (password == null) {
//   console.log("You Pressed Cancel Button");
// }

if (password == word) {
  console.log(`You Enter Correct Password : ${word}`);
}
else if (password != null) {
  while (password != word) {
    let password = prompt("Enter Correct Password");

    if (password == null) {
      console.log("You Pressed Cancel Button");
      break;
    }
    //  else if (password == word) {
    //   console.log(`You Enter Correct Password : ${word}`);
    // break;
    // }
  }
}

// let password = prompt("Enter Your Password");
// let word = "kelvin";

// // if (password == null) {
// //   console.log("You Pressed Cancel Button");
// // }

// if (password == word) {
//   console.log(`You Enter Correct Password : ${word}`);
// } else if (password != null || password == word ) {
//   while (password != word) {
//     let password = prompt("Enter Correct Password");

//     if (password == null) {
//       console.log("You Pressed Cancel Button");
//       break;
//     } else if (password == word) {
//       console.log(`You Enter Correct Password : ${word}`);
//       break;
//     }
//   }
// }

// 1 == 1;
// 1 != 2;
