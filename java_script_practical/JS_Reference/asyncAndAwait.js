// Here async Declare new Promise
// Here await Declare fulfilled(resolve) Promise callBack Means .then()
{
  let url = `https://jsonplaceholder.typicode.com/posts`;
  async function my(url) {
    let store = await fetch(url);
    console.log(store);
    let response = await store.json();
    console.log(response);
  }
  my(url);
}
{
  let url = `https://jsonplaceholder.typicode.com/posts`;
  function my(url) {
    return new Promise(function (resolve, reject) {
      fetch(url).then((response) => {
        return resolve(response.json());
      });
    });
  }
  my(url).then((data) => {
    console.log(data);
  });
}
// {
//   // Wrong Way Of Fetch Method :- First Promise Fulfilled And Also Return Second Promise But Second Promise Reject Or First Promise Prototype Shows Those Fetch Data

//   let url = `https://jsonplaceholder.typicode.com/posts`;
//   function my(url) {
//     return new Promise(function (resolve, reject) {
//       fetch(url).then((response) => {
//         let str = response.json();
//         console.log(str);
//         return resolve(response.json()); // Output :- Shows Error For Reason We Already Use str.....
//       });
//     });
//   }
//   my(url).then((str) => {
//     console.log(str);
//   });
// }
// console.log(fetch(`https://jsonplaceholder.typicode.com/posts`));

{
  function f() {
    console.log("maulik");
  }
  function s(f) {
    console.log("pokiya");
    f();
  }
  function t(s) {
    console.log("hello");
    s(f);
  }
  function four(t) {
    console.log("world");
    t(s);
  }
  four(t);
}
