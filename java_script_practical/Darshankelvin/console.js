/*
-----------0.  all console.
-----------1.  varriable.
-----------2.  if else(conditional statement and also loop).
-----------3.  if else, else if(conditional statement and also loop).
-----------4.  do while(loop).
-----------5.  while(loop).
-----------6.  for(loop).
-----------7.  nested loop(means loop in loop).
-----------8.  arithmetic operators(addition(+), subtraction(-), multipication(*), divide(/)).
-----------9.  assignment operators(+=, -=, *=, /=, ++ ,--, **,).
-----------10. logical operators(and(&&), or(||), not(!)).
-----------11. data types(string('',"",``), number(include int and float values), boolean(Yes/No, On/Off, True/False)).
-----------12. array([]).
-----------13. objects({}).
-----------14. Switch case statement.
-----------15. window.print()[print page].
-----------16. setInterval and clearInterval.
-----------17. setTimeout and clearTimeout.
-----------18. Math function.
-----------19. Date function(new Date).
-----------20. event example="onclick, keypress, keydown, keyup".
-----------21. eval.
-----------22. Prompt(), confirm(), alert().
-----------23. Selectors(DOM).
-----------24. return; , break; , continue;.
-----------25. split().
-----------26. textContent.
-----------27. classList.add(`class name`).
-----------28. create = function name(parameter)  , name()="forCall" parameter means named variable used for pass value in function.
-----------29. new Audio.
-----------30. play() for play audio in javascript.
-----------31. event example="keyword of javascript".
-----------32. getBoundingClientRect.
-----------33. getComputedStyle.
-----------34. setProperty.
-----------35. setAttribute.
-----------36. Arrow function.
-----------37. Hoisting.


*/
// let i = 1
// let j = 1

// for(i=1;i<=5;i++)
// {
//   for(j=1;j<=i;j++)
//   {
//     console.log(j);
//   }

// }

// let b = 1;
// let c = 2;
// let d = 3;
// let e = 4;
// let f = 5;

// let ok = b * c * d * e * f;

// console.log(ok)

// let a = 1;
// for (let i = 1; i <= 5; i++) {
//   let m = a * i;
//   console.log(m);
//   let ans = a * i * m;
//   console.log(ans)
// }

// let f = 1;
// let a = 1;
// for (let i = 1; i <= 5; i++) {
//   let m = a * i;
//   f = f * m;
//   console.log(f);
// }

// let b = 1;
// let c;
// for (let i = 1; i <= 5; i++) {
//   c = a * i;
//   a = c;
//   console.log(c);
// }

// {
//   let a = 0;
//   let b = 2;
//   let even;
//   for (let i = 1; i <= 10; i++) {
//     even = a + b;
//     a = even;
//     if (even > 10) {
//       console.log(even);
//     } else {
//       console.log(`hello`);
//       break;
//     }
//   }
// }

// {
// let a = 0;
// let b = 3;
// let odd;
// let c = 1;
// console.log(c);
// for (let i = 1; i <= 10; i++) {
// odd = a + b;
// a = odd;
// console.log(odd);
// let mul = b * i;
// console.log(mul);
// }
// }

// {
//   let a = 1;
//   let b = 2;
//   let odd;
//   console.log(a)
//   for (let i = 1; i <= 5; i++) {
//     odd = a + b;
//     a = odd;
//     console.log(odd);
//   }
// }

// {
//   for (let i = 1; i <= 5; i++)
//   {
//     for (let j = 1; j <= i; j++)
//     {
//       console.log(j);
//       for(let a = 1; a <= j; a++)
//       {
//         console.log(a);
//       }
//     }
//   }
// }

// {
// let i = 2;
// let j = 11;
// let s;
// let z;
// z = i / j;
// s = j % i;
// console.log(z)
// console.log(s);
// }

// {
//   let i = 12;
//   let j = 10;

//   if (i<10 || i>=2) {
//     console.log(i);
//     // i++;
//   }else{
//     console.log("big");
//   }
// }

// function error() {
//   let a = `2`;
//   let b = 2;
//   let c = a + b;
//   if (c == 22) {
//     console.log(c);
//   } else {
//     console.error(`this is error`);
//   }
// }
// error();

// {
//   let i = 1;
//   let j = 1;
//   do {
//     i++;
//     do {
//       console.log(j);
//       j++;
//     } while (j <= i);
//   } while (i <= 5);
// }

// {
//   let a = 1;
//   let b = 2;
//   let odd;
//   for (let i = 1; i <= 5; i++) {
//     odd = a + b;
//     a = odd;
//     console.log(odd);
//   }
// }

// {
//   for (let i = 0; i <= 5; i++) {
//     if (i % 2 == 0) {
//       console.log(i);
//     } else if (i % 2 == 1) {
//       console.log(i);
//     } else {
//       console.log(`this is error`);
//     }
//   }
// }

// for (let i = 1; i <= 5; i+=2) {
//   console.log(i);
// }

// {
//   let a = 0;
//   let av;
//   for (let i = 1; i <= 10; i++) {
//     av = a + i / 10;
//     a = av;
//     console.log(av);
//   }
// }

// {
//   let a = 0;
//   let b;
//   let av;
//   for (let i = 1; i <= 10; i++) {
//     av = a + i;
//     a = av;
//   }
//   b = av / 10;
//   console.log(b);
// }

// {
//   let a = new String(24522);
//   console.log(a);
//   console.log(typeof a);

//   let b = new Array(`this is strings`, 111, true);
//   console.log(typeof b);

//   let c = String(1213);
//   console.log(typeof c);
// }

// {
//   let a;
//   let b = Number();
//   console.log(b);
//   console.log(a);
//   if (a == b) {
//     console.log(`you are enter`);
//   } else {
//     console.log(`you are not enter`);
//   }
// }

// {
//   let a;
//   let b;
//   if (a == b) {
//     console.log("same");
//   } else {
//     console.log("not same");
//   }
// }

// {
//   let a = 10;
//   let b = 10;
//   if (typeof a == typeof b) {
//     document.write("same");
//   } else {
//     document.write("not same");
//   }
// }
// {
//   for (let i = 1; i <= 1000; i++) {
//     console.log(`hack`);
//   }
// }
// let a = "({";
// if () {
//   console.log(a);
// } else {
//   console.log(`this is error`);
// }

// {
//   let a = 1;
//   let b;
//   for (let i = 1; i <= 5; i++) {
//     b = a * i;
//     a = b;
//     console.log(b);
//   }
// }

// {
//   let a = 1;
//   let b;
//   let i = 1;
//   do {
//     i++;
//     b = a * i;
//     a = b;
//     console.log(b);
//   } while (i <= 5);
// }
// for (let i = 1; i <=5; i++) {
//     if (i==2) {
//         continue;
//     }
//     console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//     if (i == 3) {
//          continue;
//     }
//     console.log(i);
//   }
// {
//     let a = String(1)
//     console.log(a);
//     console.log(typeof a);

// }
// let a =10;
// let b =10;
// console.log(a+=`hgfd`) ;

// let a = 10;
// let b = 11;
// let c = a + b;
// const hello = (c) => {
//   console.log(c);
// };

// console.log(3%4);

// let a = 50;
// if (a % 2 == 0) {
//     console.log(25);
// } else {
//     console.log(`not`);
// }
// let a = 1;

// let set = setInterval((par, meter) => {
//     if (a > 5) {

//         clearInterval(set);

//     }
//     else{

//         console.log(`hello` + a);
//     }
//     a++;
//     // console.log(set);
//     //   console.log(a);

// }, 1000);

// let sen = `hello checking world`;

// let ok = `world`

// console.log(`In this sentence word ${sen.includes(ok)? "is include":"is not include"}`);

// let check = `the name ${sen.includes(ok)?"true":"flase"}`

// console.log(check);

// const watch = setInterval(() => {

//     let date = new Date();
//     let sec = date.toLocaleTimeString();
//    console.log(sec);

// }, 1000)

// const watch1 = setInterval(() => {

//     let date = new Date;
//     let sec = date.getSeconds();
//     p1.innerHTML = sec;

// }, 1000)

// const watch2 = setInterval(()=>{

//     let date = new Date();
//     let timer = date.toLocaleTimeString();
//     console.log(timer);

// },1000)

// const nice = setInterval(()=>{

//     for(let i = 0; i<=10; i++){

//         console.log(i);
//     }

// },1000)

// let a =1;
// let b ;
// if (a, b) {
//   console.log("a");
// } else {
//   console.log("b");
// }

// let are = new Array();
// let pro = prompt();

// for(let i = 1; i<=pro; i++){
//     are = i;
//   console.log(are);
// }

// let are = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 1; i<=are.length - 1; i++){

//     if(i % 3 == 0 && are[0] == 0){

//         are[i] = "fizz";
//         // continue;
//     }
//     else{
//         are[i] = i;
//     }
//     console.log(are[i]);
// }
// let are = new Array();

// for(let i = 1; i<=20; i++){

//     if(i % 3 == 0 ){

//         are[i] = "fizz";
//         // continue;
//     }
//     else{
//         are[i] = i;
//     }
//     console.log(are);
// }

// let a = [1,2,3];

// a[3] = 4;
// a[10] = 4;
// console.log(a);

// let a = setInterval(()=>{

//     setTimeout(()=>{
//         console.log("hello world");
//     },2000)

// },1000)

// let b = setTimeout(()=>{

//     let g = setInterval(()=>{
//         console.log("jhhvjkshkncndmih")
//     },1000)
// },2000)

// function b(){ 
//     return new Promise(function (resolve, reject){
//     if(true){
//         resolve("fghg")
//     }
//     else{
//         reject("dhghdghdc")
//     }
// });
// }

// b.then((a)=>{
// console.log(a);
// }).catch((c)=>{
// console.log(c);
// })

// let vv = new XMLHttpRequest();
// vv.onreadystatechange = function(){
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//     }
//     else{
//         console.log("xgcdsgvkaeus");
//     }
// }
// vv.open("GET","thuis.html",true);
// vv.send();

// const flight = "LH234";

// function my(flight){
// return this.flight = "LH999";
// }
// console.log(my(flight));
// console.log(my());


// let a1 = [5,2,3,4,4]
// let a2 = a1;
// a2.push(6)
// console.log(a1);
// console.log(a2);

// a1.replace([5],["ft"])
// console.log(a1);
// console.log(a2);

// let a = "Darshan"
// let b = Number("Drashan")
// console.log(b);

// let obj = {
//     name:"dddddfsfd",
//     sur:"fhudufdufh",
//     age:["1:tt","2:yy"]
// }
// console.log(2 +" " + obj.age[1]);

// console.log("2" + "2" + 2);

// for(let i = 0 ; i <= 20 ; i++){
//     console.log(Math.ceil(Math.random()*6));
// }

let arr = [21,43,34,521,44,13,1];
    pos = 2;

    for (let i = pos-1; i <= arr.length-2; i++) {
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1;  

    console.log(arr); 