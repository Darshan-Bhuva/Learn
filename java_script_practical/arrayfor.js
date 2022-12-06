// Array.length()
// Array.toString()
// Array.join()
// Array.pop()
// Array.push()
// Array.shift()
// Array.unshift()
// Array.concat()
// Array.delete()
// Array.sort()
// Array.reverse()
// Array.spilce()
// for in loop
// for of loop
// forEach loop
// map loop
// filter loop
// redues loop
// find loop



// console.log(are);

// let newa = are.join(`-`)
// console.log(newa);

// let strare = are.toString();
// console.log(typeof(strare));

// let popare = are.pop();
// console.log(are);
// console.log(popare);

// let pushare = are.push(8);
// console.log(pushare);
// console.log(are);

// let shiftare = are.shift(); //Return length
// console.log(shiftare);
// console.log(are);

// let unshift = are.unshift(9);
// console.log(unshift);
// console.log(are);

// let secare = [`a`,`b`,`c`,`d`,`e`]

// let con = are.concat(secare);
// console.log(con);

// let del = delete are[2];
// console.log(del);
// console.log(are);

// let neware = [1,2,3,4,5,6,11222,16468,100780,45700,42229,000,0555,43,42,41]
// let sort = neware.sort()
// console.log(sort);

// let rev = neware.reverse();
// console.log(rev);
// console.log(neware);

// let splice = are.splice(1,3,`darshan`,`parth`,`rohan`);
// console.log(are);

// let slice = are.slice(1,5);
// console.log(slice);

// for(let i=0; i<are.length; i++){
    
    // console.log(are[i]); --------------per element
    // console.log(are);-----------------full array
    // console.log(i);-------------------index of array
    // }

let are = [11,2,31,4,51,6,11,111,111]

// for(let a of are){

//     console.log(a);
// }

// for(let a in are){

//     console.log(a);
// }

// let does = are.forEach((values,index,array)=>{

//     return values*index+values;
// })

// let doess = are.map((values,index,array)=>{

//     return values==51;
// })

// let doesss = are.filter((values)=>{

//     return values<=51;
// })

let are2 = [1,22,3,5,2,1,4]

let dos = are2.reduce((values)=>{
 
    return values + values;
  
})
console.log(dos); 
// console.log(are2)s;

// let doesssss = are.find((values)=>{

//     return values==51;
// })

// console.log(doessss);
// console.log(are);