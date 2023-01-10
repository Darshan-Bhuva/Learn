// TASK 1. require("ModuleName"); Inbuilt KeyWord For Access Any Module File

// TASK 2. .writeFileSync("FileName.Extension", "Add Data In File")

// TASK 3. .appendFileSync("FileName.Extension","Add New Data For Append")

// TASK 4. .readFileSync("FileName.Extension") [Provide Buffer Data In Binary] [Use .toString() For Convert Buffer Bnary Data Into String Data For Read In console.log()]

// TASK 5. .readFileSync("FileName.Extension", "utf8") [Provide Buffer Data Binary Into String Using "utf8"]

// TASK 6. renameSync("OLD FileName.Extension", "NEW FileName.Extension")

// In Node.Js Core Modules Are Really Important......
// In Node.Js 'fs' Is Very Important Command And Keyword Of Node.Js....

// Full Form Of "fs" Is File System....

// In NodeJS, require() is a built-in function to include external modules that exist in separate files. require() statement basically reads a JavaScript file, executes it, and then proceeds to return the export object

// Syntax Of require ------- const packageName = require('packageName');
// Here Use "fs" Using require()......
// Here We Read "fs" JavaScript File Using Require()....
const fs = require("fs");

// ---------------------------------------------------------------------------------------------------------------------------

// Here We Can Create A New File Using "fs" File Module And .writeFileSync() KeyWord
// .writeFileSync() Is Synchronously Work

// Syntax Of .writeFileSync("Path/FileName.Extension", "Write File Data Here....") ------- This Syntax Use When You Want Create File In Your Entered Path Dictionary[ Dictionary Means Folder ]

// Syntax Of .writeFileSync("FileName.Extension", "Write File Data Here....") ------- This Syntax Use When You Want Create File In Your Current Dictionary[ Dictionary Means Folder ]
fs.writeFileSync(
  "read.txt",
  "I Create This File Using .writeFileSync And 'fs' module File Import"
);
// This Is A Wrong Way.......
// let a = fs.writeFileSync(
//   "read.txt",
//   "I Create This File Using .writeFileSync And 'fs' module File Import"
// );
// console.log(a); // Output:- undefined

// ---------------------------------------------------------------------------------------------------------------------------

// Here We Can Not Add New Data In Same File But We OverWrite New Data With Old Data
fs.writeFileSync("read.txt", "1 2 3 4 5 6 7 8 9 10.....");

// ---------------------------------------------------------------------------------------------------------------------------

// Syntax Of .appendFileSync("Path/FileName.Extension", "Write File Data Here....") ------- This Syntax Use When You Want Add New Data In Created File In Your Entered Path Dictionary[ Dictionary Means Folder ]

// Syntax Of .appendFileSync("FileName.Extension", "Write File NewData Here....") ------- This Syntax Use When You Want Add New Data In Created File In Your Current Dictionary[ Dictionary Means Folder ]

// Here .appendFileSync Is Similar To Append KeyWord Of JavaScript...
// Here .appendFileSync Is Add New Data In Created File...
// Here .appendFileSync Will Be Run Synchronously.....
// Here .appendFileSync Is Add New Data In Created File, Not OverWrite With Old Data
fs.appendFileSync(
  "read.txt",
  "I Can Add New Data Using .appendFileSync KeyWord And 'fs' Module Fill Import Using require()"
);

// ---------------------------------------------------------------------------------------------------------------------------

// Syntax Of .readFileSync("Path/FileName.Extension") ------- This Syntax Use When You Want Read Data In Created File In Your Entered Path Dictionary[ Dictionary Means Folder ]

// Syntax Of .readFileSync("FileName.Extension") ------- This Syntax Use When You Want Read Data In Created File In Your Current Dictionary[ Dictionary Means Folder ]

// Here .readFileSync Also Work Synchronously
// Here We Can Read Data Of Created File Using .readFileSync()
// Here We Can Store .readFileSync() Data In Variable For Read Those Stored Data In Consol.log()
// Here .readFileData Will Be Return Binary Buffer Data Like This.....
// <Buffer 31 20 32 20 33 20 34 20 35 20 36 20 37 20 38 20 39 20 31 30 2e 2e 2e 2e 2e 49 20 43 61 6e 20 41 64 64 20 4e 65 77 20 44 61 74 61 20 55 73 69 6e 67 20 ... 67 more bytes>
// .readFileData Will Be Return Binary Buffer Data That's Reason We Use .toString() KeyWord For Read Those Data
const readBufData = fs.readFileSync("read.txt");
console.log(readBufData); // Output :- Binary Buffer Data
const convertedBufData = readBufData.toString();
console.log(convertedBufData);

// ---------------------------------------------------------------------------------------------------------------------------

// Syntax Of .renameSync("Path/Old FileName.Extension", "Path/New FileName.Extension") ------- This Syntax Use When You Want Rename Of Created File In Your Entered Path Dictionary[ Dictionary Means Folder ]

// Syntax Of .renameSync("Old FileName.Extension", "New FileName.Extension") ------- This Syntax Use When You Want Rename Of Created File In Your Current Dictionary[ Dictionary Means Folder ]

// Here We Can Rename Those Created File Using .renameSync()
// .renameSync() Also Work Synchronously......
// Here We Can Rename Old Name With New Name And Also Change Extension
// Syntax Of .renameSync("OldFileName.Extension", "NewFileName.Extension")
// fs.renameSync("read.txt", "reading.html"); // This Is Also Working, Here We Change Extension
// fs.renameSync("read.txt", "reading.txt"); // This Is Also Working, Here We Change Name Not Extension
