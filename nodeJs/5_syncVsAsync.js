// Here We See Difference Between Synchronous Programming And Asynchronous Programming

{
  // First We Shows Synchronous Progrmming....

  // Accessing Modules Package Using require()
  // We Use "fs" Module Package

  const fs = require("fs");
  fs.writeFileSync(
    "synchronousFile.txt",
    "I Create File Using .writeFileSync()"
  );
  console.log("Checking For Synchronous");
}
{
  // Second We Shows Asynchronous Programming....
  // Accessing Modules Package Using require()
  // We Use "fs" Module Package

  const fs = require("fs");
  fs.writeFile(
    "asynchronousFile.txt",
    "I Created File Using .writeFile()",
    (error) => {
      console.log(
        `Any Type Error Shows Here, This Asynchronous Programming CallBack Function Error == ${error}`
      );
    }
  );
  console.log("Checking For Asynchronous");
}
