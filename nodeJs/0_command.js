// 1. ls - The most frequently used command in Linux to list directories
// 2. pwd - Print working directory command in Linux
// 3. cd - Linux command to navigate through directories
// 4. mkdir - Command used to create directories in Linux
// 5. mv - Move or rename files in Linux
// 6. cp - Similar usage as mv but for copying files in Linux
// 7. rm - Delete files or directories
// 8. touch - Create blank/empty files
// 9. ln - Create symbolic links (shortcuts) to other files
// 10. cat - Display file contents on the terminal
// 11. clear - Clear the terminal display
// 12. echo - Print any text that follows the command
// 13. less - Linux command to display paged outputs in the terminal
// 14. man - Access manual pages for all Linux commands
// 15. uname - Linux command to get basic information about the OS
// 16. whoami - Get the active username
// 17. tar - Command to extract and compress files in Linux
// 18. grep - Search for a string within an output
// 19. head - Return the specified number of lines from the top
// 20. tail - Return the specified number of lines from the bottom
// 21. diff - Find the difference between two files
// 22. cmp - Allows you to check if two files are identical
// 23. comm - Combines the functionality of diff and cmp
// 24. sort - Linux command to sort the content of a file while outputting
// 25. export - Export environment variables in Linux
// 26. zip - Zip files in Linux
// 27. unzip - Unzip files in Linux
// 28. ssh - Secure Shell command in Linux
// 29. service - Linux command to start and stop services
// 30. ps - Display active processes
// 31. kill and killall - Kill active processes by process ID or name
// 32. df - Display disk filesystem information
// 33. mount - Mount file systems in Linux
// 34. chmod - Command to change file permissions
// 35. chown - Command for granting ownership of files or folders
// 36. ifconfig - Display network interfaces and IP addresses
// 37. traceroute - Trace all the network hops to reach the destination
// 38. wget - Direct download files from the internet
// 39. ufw - Firewall command
// 40. iptables - Base firewall for all other firewall utilities to interface with
// 41. apt, pacman, yum, rpm - Package managers depending on the distro
// 42. sudo - Command to escalate privileges in Linux
// 43. cal - View a command-line calendar
// 44. alias - Create custom shortcuts for your regularly used commands
// 45. dd - Majorly used for creating bootable USB sticks
// 46. whereis - Locate the binary, source, and manual pages for a command
// 47. whatis - Find what a command is used for
// 48. top - View active processes live with their system usage
// 49. useradd and usermod - Add new user or change existing users data
// 50. passwd - Create or update passwords for existing users
{
  // Basic Theroies Of Node.Js Starting.......
  // cd ./Enter Your Path For Access Any Folder Which We Want....
  // cd .. [Wite In Terminal, This cd Command Back From Current Folder]
  // anyCommandName --help [Shows All The Information Of Those Command]
  // dictionary == Folder Name
  // Windows and Linux have commands with the same name as well
  // How To Run Program Of node.js In terminal :- Write node 'Enter File Name, Which You Want To Run'
  // type nul > "Enter File Name For Create New File Using Command"
  // The REPL Feature Of Node Is Very Useful In Experimenting With Node.js Codes And To Debug JavaScript Codes.
  // How To Trun On REPL Mode In Node.js.... ANSWER :- In Vs Code Terminal Or Any Other Terminal Write 'node'
  // Turn On REPL MODE And Press "Tab Key" Twice, For Reason See All The Properties And Methods Of Node.js
  // Turn On REPL MODE And Write 'fs', For Reason See All The COMMANDS And Methods Of Node.js
  // Use Of REPL ------- {In Terminal Of Vs Code Or Any Other Terminal}
  // 1. Js Expression
  // 2. Use Variables
  // 3. Multiline Code
  // 4. Use (_) To Get The Last Result
  // 5. We Can Use Editor Mode
  // cd ./Enter Your Path For Access Any Folder Which We Want....
  // cd .. [Wite In Terminal, This cd Command Back From Current Folder]
  // \n For Next Line
  // "utf8" Use For Encoding....
}

{
  // require("Enter Any Modules Packages Name, Which You Want To Access...") ------- Use For Accessing Any Modules Or Packages
  // "fs" Is Stand For File System
  // "fs" Is Package[ Module].....
  // Here Theory Of "fs" ------- https://nodejs.org/api/fs.html
  const fs = require("fs");
  console.log(fs);
  console.log(fs.constants);

  // "fs" With Synchronously.....

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

  // "fs" With Asynchronously.....

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
}

{
  // require("Enter Any Modules Packages Name, Which You Want To Access...") ------- Use For Accessing Any Modules Or Packages
  // "os" Is Stand For Operating System
  // "os" Is Package[ Module].....
  // Here Theory Of "os" ------- https://nodejs.org/api/os.html
  const os = require("os");
  console.log(os);
  console.log(os.freemem());
  console.log(os.arch());
  console.log(os.platform());
}
{
  // require("Enter Any Modules Packages Name, Which You Want To Access...") ------- Use For Accessing Any Modules Or Packages
  // "path" Is Package [ Module]
  // Here Theory Of "path" ------- https://nodejs.org/api/path.html

  const path = require("path");
  console.log(path);
}
