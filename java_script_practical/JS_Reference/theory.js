{
  // In JavaScript, there are several types of operators that can be used to perform different operations on variables and expressions. Some of the most common types of operators in JavaScript are:

  // 1. Arithmetic operators, such as +, -, *, /, and %, are used to perform mathematical operations on numbers.

  // 2. Assignment operators, such as =, +=, -=, *=, and /=, are used to assign values to variables.

  // 3. Comparison operators, such as ==, ===, !=, !==, >, <, >=, and <=, are used to compare two values and return a boolean true or false value.

  // 4. Logical operators, such as &&, ||, and !, are used to combine multiple boolean expressions and return a single boolean value.

  // 5. Bitwise operators, such as &, |, ^, ~, <<, and >>, are used to perform bitwise operations on numbers.

  // Arithmetic operators
  console.log(3 + 4); // Output: 7
  console.log(8 - 2); // Output: 6
  console.log(4 * 5); // Output: 20
  console.log(10 / 5); // Output: 2
  console.log(10 % 3); // Output: 1

  // Assignment operators
  var x = 5;
  x += 2; // x is now 7
  x -= 3; // x is now 4
  x *= 2; // x is now 8
  x /= 4; // x is now 2

  // Comparison operators
  console.log(5 == 5); // Output: true
  console.log("5" == 5); // Output: true
  console.log(5 === 5); // Output: true
  console.log(5 != 4); // Output: true
  console.log(5 !== 4); // Output: true
  console.log(5 > 4); // Output: true
  console.log(5 < 4); // Output: false
  console.log(5 >= 5); // Output: true
  console.log(5 <= 4); // Output: false

  // Logical operators
  console.log(true && true); // Output: true
  console.log(false && false); // Output: false
  console.log(true && false); // Output: false
  console.log(true || false); // Output: true
  console.log(false || true); // Output: true
  console.log(true || true); // Output: true
  console.log(false || false); // Output: true
  console.log(!true); // Output: false
  console.log(!false); // Output: true

  // Bitwise operators
  console.log(5 & 3); // Output: 1
  console.log(5 | 3); // Output: 7
  console.log(5 ^ 3); // Output: 6
  console.log(~5); // Output: -6
  console.log(5 << 2); // Output: 20
  console.log(5 >> 2); // Output: 1
}

{
  // In JavaScript, there are several different types of data that can be used in a program. Some of the most common data types in JavaScript are:

  // 1. String: A sequence of characters, enclosed in quotation marks (either single or double)

  // 2. Number: Numeric values, including integers, floating-point numbers, and special values like Infinity and NaN

  // 3. Boolean: A value that can be either true or false

  // 4. Object: A collection of key-value pairs

  // 5. Array: An ordered list of values

  // 6. Function: A piece of code that can be called and executed at a later time

  // 7. null: A value that represents an absence of a value

  // 8. undefined: A value that indicates that a variable has not been assigned a value

  // String data type
  var name = "John Doe";
  console.log(typeof name); // Output: string

  // Number data type
  var age = 33;
  console.log(typeof age); // Output: number

  // Boolean data type
  var isRaining = true;
  console.log(typeof isRaining); // Output: boolean

  // Object data type
  var person = {
    name: "John Doe",
    age: 33,
  };
  console.log(typeof person); // Output: object

  // Array data type
  var colors = ["red", "green", "blue"];
  console.log(typeof colors); // Output: object (in JavaScript, arrays are considered objects)

  // Function data type
  function greet() {
    console.log("Hello, world!");
  }
  console.log(typeof greet); // Output: function

  // null data type
  var empty = null;
  console.log(typeof empty); // Output: object (in JavaScript, null is considered an object)

  // undefined data type
  var notDefined;
  console.log(typeof notDefined); // Output: undefined
}

{
  // In JavaScript, there are two types of scope: global scope and local scope.

  // 1. Global scope refers to variables and functions that are defined outside of any function and are therefore available to be accessed and used anywhere in your code.

  // 2. Local scope refers to variables and functions that are defined inside a function and are only available to be accessed and used within that function.
  // Global variable

  var name = "John Doe";

  function greet() {
    // Local variable
    var message = "Hello, " + name;
    console.log(message); // Output: 'Hello, John Doe'
  }
  greet();
  console.log(name); // Output: 'John Doe'
  console.log(message); // Output: Uncaught ReferenceError: message is not defined
}

{
  // In JavaScript, the break, continue, and return statements are used to control the flow of execution in loops and functions.

  // 1. The break statement is used to immediately exit a loop or switch statement.

  // 2. The continue statement is used to skip the rest of the current iteration of a loop and move on to the next iteration.

  // 3. The return statement is used to exit a function and return a value to the caller.
  // The break statement

  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i); // Output: 0, 1, 2, 3, 4
  }

  // The continue statement
  for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      continue;
    }
    console.log(i); // Output: 1, 3, 5, 7, 9
  }

  // The return statement
  function square(x) {
    return x * x;
  }
  console.log(square(2)); // Output: 4
}
