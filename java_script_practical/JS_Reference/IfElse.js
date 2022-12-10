// Syntax of if/else , else if.........

// if(condition){
    // This condition Will Be true, Then This Code Will Be Excute
// }

// else if(condition){
    // This condition Will Be true, Then This Code Will Be Excute
// }

// else if(condition){
    // This condition Will Be true, Then This Code Will Be Execute
// }

// else{
    // All condition will Be false, Then This Code Will Be Execute
// }

// if/else else if TASK

let input = prompt("Enter Number Value");

if(input < 0){
    console.log(`This Value Is Smaller Than 0`);
}
else if(input == 0){
    console.log(`This Value Is 0`);
}
else if(input > 0 && input <= 100){
    console.log(`This Value Is Bigger Than 0  And Smaller_Than Equal 100`);
}
else if(input > 100 && input <= Infinity){
    console.log(`This Value Is Bigger Than 100 And Smaller_Than Equal Infinity`);
}
else{
    console.log(`This Is Not Number Value, Please Enter Number Value`);
}

