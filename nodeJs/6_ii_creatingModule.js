// In Here We Create Our Own Module......
// In Here We Export [ Using module.export] Those Created Modules.....

const myAddition = (a, b) => {
  return a + b;
};
const mySubstraction = (a, b) => {
  return a - b;
};
const myMultipication = (a, b) => {
  return a * b;
};
const myDivision = (a, b) => {
  return a / b;
};
const myObject = {
  name: "created",
  LineNo: "anonymouse",
};
const myFunObj = (name, surname) => {
  return {
    name: `${name}`,
    surname: `${surname}`,
  };
};
module.exports = {
  myAddition,
  mySubstraction,
  myMultipication,
  myDivision,
  myObject,
  myFunObj,
};
