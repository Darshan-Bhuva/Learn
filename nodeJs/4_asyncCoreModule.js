// ASYNCHRONOUS CORE MODULES.......
// IN ASYNCHRONOUS CORE MODULES HAS ALWAYS CALLBACK FUNCTION [ Means Function call with parameter, Arror Function]

// TASK 1. require("ModuleName"); Inbuilt KeyWord For Access Any Module File

// TASK 2. .mkdir("Folder Name") Create Folder[ Means Dictionary]

// TASK 3. .writeFile("FileName.Extension", "Add Data In File", (error)=>{console.log(error)})

// TASK 4. .appendFile("FileName.Extension","Add New Data For Append", (error)=>{console.log(error)})

// TASK 5. .access("Any Dictionary Name", fs.constants ,(error)=>{console.log(error)}) [Return True False Value, Checking Folder[Dictionary] Existance In Current Folder[Dictionary] Or Given Path Folder[Dictionary] ]

// TASK 6. .readFile("FileName.Extension", "utf8", (error, data)=>{}) [Provide Buffer Binary Data Into String Using "utf8"]

// TASK 7. rename("OLD FileName.Extension", "NEW FileName.Extension", (error)=>{console.log(error)})

// TASK 8. unlink("FileName.Extension", (error)=>{console.log(error)}) [Delete File And Also Delete File According Their Given Path]

// TASK 9. rmdir("FolderName") [Delete Folder And Also Delete Folder According Their Given Path]

// TASK 10. exists("Any Dictionary Name", (error)=>{console.log(error)}) [Return True False Value, Checking Folder[Dictionary] Existance In Current Folder[Dictionary] Or Given Path Folder[Dictionary] ]------- Not Working.....

// ---------------------------------------------------------------------------------------------------------------------------

// Here "fs" Module File Access.....
const fs = require("fs");

// 1. Create A Folder Named It crudAsyncFolder.......
// Creating Folder Using .mkdir()
const folderName = "crudAsyncFolder";
// fs.access(folderName, fs.constants.R_OK | fs.constants.W_OK, (error) => {
//   console.log(error);
// });
// fs.mkdir(folderName, (error) => {
//   console.log(error);
//   console.log(
//     `Here Folder Created Using .mkdir With ASYNCHRONOUSLY And Folder Name Is ${folderName}`
//   );
// });

// 2. Here We Can Create A New ASYNC File Using "fs" File Module And .writeFile() KeyWord
// .writeFile() Is Asynchronously Work
// .writeFile() Has 3 Parameter ------- i)"Path/FileName.Extension", ii)"Write File Data Here...." iii) callback Function or Arrow Function

// Syntax Of .writeFile("Path/FileName.Extension", "Write File Data Here....", (error)=>{console.log}) ------- This Syntax Use When You Want Create Async File In Your Entered Path Dictionary[ Dictionary Means Folder ]

// Syntax Of .writeFileSync("FileName.Extension", "Write File Data Here....", (error)=>{console.log}) ------- This Syntax Use When You Want Create Asyn File In Your Current Dictionary[ Dictionary Means Folder ]

fs.writeFile(
  "crudAsyncFolder/crudAsyncFile.txt",
  "I Created crudAsynFile Using .writeFile()",
  (error) => {
    console.log(error);
    console.log(`Async File Created Successfully....`);
  }
);

// 3. Add More Data Into The Asyn File At The End Of The Existing Data
// Adding More Data Using .appednFile("Path/AsynFileName.Extension", "Appending More Data", CallBack function Or (error)=>{})

fs.appendFile(
  "crudAsyncFolder/crudAsyncFile.txt",
  `\n I Added More Data Using .appendFile()`,
  (error) => {
    console.log(error);
    console.log(`Async File Updated With .appendFile() Successfully....`);
  }
);

// 4. Read The Data Without Getting The Buffer Data At First [.readFile("") Replace With Encoding ["utf8"]....]
// Read Data Using .readFile("Path/AsyncFileName",CallBack Function Or (error)=>{})
// Here We Store Data In Variable For Read Using console.log()
// This Method Not Working In Asynchronous.......
// const readData = fs.readFile("crudAsyncFolder/crudAsyncFile.txt", (error) => {
//   console.log(error);
// }); // Here We Get Buffer Binary Data
// console.log(readData);
// const convertedData = readData.toString(); // Here We Translate Buffer Binary Data Into String Data
// console.log(convertedData);

// Here We Translate Buffer Binary Data Into String Data Using "utf8" Means Encoding....
fs.readFile(
  "crudAsyncFolder/crudAsyncFile.txt",
  "UTF-8",
  (error, readDataUsingParameter) => {
    console.log(error);
    console.log(readDataUsingParameter);
  }
);

// 5. Rename The File Name To crudMyFile.txt
// Rename File Name Using rename("Path/OldFileName","Path/NewFileName",CallBack Function Or (error)=>{})

fs.rename(
  "crudAsyncFolder/crudAsyncFile.txt",
  "crudAsyncFolder/crudAsyncMyFile.txt",
  (error) => {
    console.log(error);
    console.log(
      `crudAsyncFile Is Rename Using .rename(), And New Name Is crudAsyncMyFile`
    );
  }
);

// 6. Now Delete Both The File And The Folder

// DELETE FILE USING unlink()
// unlink() Is Work Asynchronously

// Syntax Of .unlink("Path/FileName.Extension", CallBack Or (error)=>{}) ------- This Syntax Use When You Want To Delete Created Async File In Your Entered Path Dictionary[ Dictionary Means Folder ]

// Syntax Of .unlink("FileName.Extension", CallBack Or (error)=>{}) ------- This Syntax Use When You Want To Delete Created Async File In Your Current Dictionary[ Dictionary Means Folder ]

fs.unlink("crudAsyncFolder/crudAsyncMyFile.txt", (error) => {
  console.log(error);
  console.log(
    "After Rename, crudAsyncMyFile Deleted SuccessFully Using .unlink()....."
  );
});

// DELETE FOLDER USING rmdir()
// rmdir() Is Work Synchronously

// Syntax Of .rmdir("Path/FolderName", CallBack Or (error)=>{}) ------- This Syntax Use When You Want To Delete Your Entered Path Async Dictionary [ Dictionary Means Folder ]

// Syntax Of .rmdir("FolderName", CallBack Or (error)=>{}) ------- This Syntax Use When You Want To Delete Your Async Current Dictionary[ Dictionary Means Folder ]

fs.rmdir("crudAsyncFolder", (error) => {
  console.log(error);
  console.log(
    "After Delete crudAsyncMyFile, crudAsyncFolder Deleted SuccessFully Using .rmdir()....."
  );
});
