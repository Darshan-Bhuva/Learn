// cd ./Enter Your Path For Access Any Folder Which We Want....
// cd .. [Wite In Terminal, This cd Command Back From Current Folder]
// \n For Next Line
// "utf8" Use For Encoding....

// Challenge Time.....

// 1. Create A Folder Named It crudFolder
// 2. Create A File In It Named crudFile.txt And Data Into It
// 3. Add More Data Into The File At The End Of The Existing Data
// 4. Read The Data Without Getting The Buffer Data At First [.readFileSync("") Replace With Encoding....]
// 5. Rename The File Name To crudMyFile.txt
// 6. Now Delete Both The File And The Folder

// WHAT IS CRUD.....?
// C :- Create
// R :- Read
// U :- Update
// D :- Delete

// TASK 1. require("ModuleName"); Inbuilt KeyWord For Access Any Module File

// TASK 2. .mkdirSync("Folder Name") Create Folder[ Means Dictionary]

// TASK 3. .writeFileSync("FileName.Extension", "Add Data In File")

// TASK 4. .appendFileSync("FileName.Extension","Add New Data For Append")

// TASK 5. .readFileSync("FileName.Extension") [Provide Buffer Data In Binary] [Use .toString() For Convert Buffer Bnary Data Into String Data For Read In console.log()]

// TASK 6. .readFileSync("FileName.Extension", "utf8") [Provide Buffer Binary Data Into String Using "utf8"]

// TASK 7. renameSync("OLD FileName.Extension", "NEW FileName.Extension")

// TASK 8. unlinkSync("FileName.Extension") [Delete File And Also Delete File According Their Given Path]

// TASK 9. rmdirSync("FolderName") [Delete Folder And Also Delete Folder According Their Given Path]

// TASK 10. existsSync("Any Dictionary Name") [Return True False Value, Checking Folder[Dictionary] Existance In Current Folder[Dictionary] Or Given Path Folder[Dictionary] ]

// ---------------------------------------------------------------------------------------------------------------------------

// Here "fs" Module File Access.....
const fs = require("fs");

// 1. Create A Folder Named It crudFolder.......
// Creating Folder Using .mkdirSync()
const folderName = "crudFolder";
if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
} else {
  console.log(`${folderName} Already Created......`);
}

// 2. Create A File In It Named crudFile.txt And Data Into It
// Createing File In Created crudFolder Using .writeFileSync()
fs.writeFileSync(
  `crudFolder/crudFile.txt`,
  "I Created crudFile Name File In crudFolder Using .writeFileSync()"
);

// 3. Add More Data Into The File At The End Of The Existing Data
// Adding More Data Using .appednFileSync()

fs.appendFileSync(
  "crudFolder/crudFile.txt",
  `\n I Added More Data Using .appendFileSync()`
);

// 4. Read The Data Without Getting The Buffer Data At First [.readFileSync("") Replace With Encoding ["utf8"]....]
// Read Data Using .readFileSync()
// Here We Store Data In Variable For Read Using console.log()
const readData = fs.readFileSync("crudFolder/crudFile.txt"); // Here We Get Buffer Binary Data
console.log(readData);
const convertedData = readData.toString(); // Here We Translate Buffer Binary Data Into String Data
console.log(convertedData);

// Here We Translate Buffer Binary Data Into String Data Using "utf8" Means Encoding....
const readDataAgain = fs.readFileSync("crudFolder/crudFile.txt", "utf8");
console.log(readDataAgain);

// 5. Rename The File Name To crudMyFile.txt
// Rename File Name Using renameSync()

fs.renameSync("crudFolder/crudFile.txt", "crudFolder/crudMyFile.txt");

// 6. Now Delete Both The File And The Folder

// DELETE FILE USING unlinkSync()
// unlinkSync() Is Work Synchronously

// Syntax Of .unlinkSync("Path/FileName.Extension") ------- This Syntax Use When You Want Delete Created File In Your Entered Path Dictionary[ Dictionary Means Folder ]

// Syntax Of .unlinkSync("FileName.Extension") ------- This Syntax Use When You Want Delete Created File In Your Current Dictionary[ Dictionary Means Folder ]

fs.unlinkSync("crudFolder/crudMyFile.txt");

// DELETE FOLDER USING rmdirSync()
// rmdirSync() Is Work Synchronously

// Syntax Of .rmdirSync("Path/FolderName") ------- This Syntax Use When You Want Delete Your Entered Path Dictionary [ Dictionary Means Folder ]

// Syntax Of .rmdirSync("FolderName") ------- This Syntax Use When You Want Delete Your Current Dictionary[ Dictionary Means Folder ]

fs.rmdirSync("crudFolder");
