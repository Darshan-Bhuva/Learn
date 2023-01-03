"use strict";
{
  // Promise Syntax 1...
  // let a = new Promise(function(resolve,reject){
  //     if(){
  //         resolve("Data....")
  //     }
  //     else{
  //         reject("Error....")
  //     }
  // })
  // a.then(function(passData){
  //     console.log(passData);
  // }).catch(function(passError){
  //     console.log(passError);
  // })
}

{
  //   Promise Syntax 2...
  //   function a(){
  //       return new Promise(function(resolve,reject){
  //         if(){
  //             resolve("Data....")
  //         }
  //         else{
  //             reject("Error....")
  //         }
  //       })
  //   }
  //   a().then(function(passData){
  //       console.log(passData);
  //   }).catch(function(passError){
  //       console.log(passError);
  //   })
}

// {
//   let prom = new Promise(function (resolve, reject) {
//     let bucket = ["Apple", "Mango", "Grapes"];
//     if (
//       bucket.includes("Apple") &&
//       bucket.includes("Mango") &&
//       bucket.includes("Grapes")
//     ) {
//       resolve(`This Is Your Bucket ${bucket}`);
//     } else {
//       reject(`Invalid Input`);
//     }
//   });
//   prom
//     .then(function (passData) {
//       console.log(passData);
//     })
//     .catch(function (passError) {
//       console.log(passError);
//     });
// }

{
  function prom(parameter) {
    return new Promise(function (resolve, reject) {
      if (
        parameter.includes("Apple") &&
        parameter.includes("Mango") &&
        parameter.includes("Grapes")
      ) {
        resolve(`This Is Your Data ${parameter}`);
      } else {
        reject(`Invalid Input`);
      }
    });
  }
  prom(["Apple", "Mango", "Grapes"])
    .then(function (passData) {
      console.log(passData);
      return (passData += " Darshan");
    })
    .then(function (passData) {
      console.log(passData);
    })
    .then(function () {
      console.log("Without Return Then Work");
    })
    .catch(function (passError) {
      console.log(passError);
    })
}
