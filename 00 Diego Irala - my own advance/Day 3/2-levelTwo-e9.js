//9 Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120


let hourVariable = Number(prompt("Enter hours","writte here the number"))
let rateVariable = Number(prompt("Enter rate per hour","writte here the number"))
let weeklyVariable = hourVariable*rateVariable
console.log("Your weekly earning is " + weeklyVariable)