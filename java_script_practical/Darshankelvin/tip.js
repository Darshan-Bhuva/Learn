// bills = [22,23,45,452,232,131];

// tip = [];

// total = [];

// for (const a of bills) {
//     let tipp = a >= 50 && a <= 300 ? 0.15 * a : 0.20 * a;
//     tip.push(tipp);
//     total.push(a + tipp)
// }

// console.log(bills);
// console.log(tip);
// console.log(total);

// function avg(val1, val2) {
//   return val1 + val2;
// }

// let total = 0;
// arr = [1, 2, 3, 4, 5];

// for (const a in arr) {
//   var final = avg(arr[a], total);
//   total = final;
// }
// console.log(final);

// let are = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let s;
// for (let i = 0; i < are.length; i++) {
//   if (are[i] % 3 == 0) {
//    s = are[i]="fizz";
//   }

// console.log(s)
// }
for (let i = 1; i <= 20; i++) {
  setTimeout(() => {
    let ok = Math.floor(Math.random() * 7);
    if (ok == 0) {
      ok = 1;
    }
    console.log(ok, i);
  }, 3000);
}
