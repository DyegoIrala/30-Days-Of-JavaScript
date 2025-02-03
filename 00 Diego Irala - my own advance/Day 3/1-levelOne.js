//1 Declare firstName, lastName, country, city, age, isMarried, 
// year variable and assign value to it and use the typeof operator to check different data types.
console.log("\tExcercises Level 1")
let firstName = "Diego"
let lastName = "Irala"
let country = "Bolivia"
let city = "Santa Cruz"
let age = 26
let isMarried = false
let year =2025

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

//2 Check if type of '10' is equal to 10
console.log("\tExcercises Level 2")
console.log(typeof("10")==10)

//3 Check if parseInt('9.8') is equal to 10
console.log("\tExcercises Level 3")
let newNumber = parseInt("9.8")
console.log(newNumber)
console.log(newNumber == 10)

//4 Boolean value is either true or false.
console.log("\tExcercises Level 4")
    //i Write three JavaScript statement which provide truthy value.
    console.log(age == 26)
    console.log(year > 2020)
    console.log(firstName == "Diego")
    //ii Write three JavaScript statement which provide falsy value.
    console.log(age < 26)
    console.log(year == 2020)
    console.log(firstName == "Miguel")

//5 Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
console.log("\tExcercises Level 5")
console.log(4>3)        //true
console.log(4>=3)       //true
console.log(4<3)        //false
console.log(4<=3)       //false
console.log(4==4)       //true
console.log(4===4)      //true
console.log(4!=4)       //false
console.log(4!==4)      //false
console.log(4!="4")     //false
console.log(4=="4")     //true
console.log(4==="4")    //false
console.log(4!=="4")    //true
let wordOne = "python"
let wordTwo = "jargon"
console.log(wordOne.length == wordTwo.length) // true

//6 Figure out the result of the following expressions first without using console.log(). 
// After you decide the result confirm it by using console.log()
console.log("\tExcercises Level 6")
let i = 4 > 3 && 10 < 12        // true 
console.log("i is "+i)          // true
let ii = 4 > 3 && 10 > 12       // false
console.log("ii is "+ii)        // false     
let iii =  4 > 3 || 10 < 12     // true
console.log("iii is "+iii)      // true
let iv = 4 > 3 || 10 > 12       // true
console.log("iv is "+iv)        // true
let v = !(4 > 3)                // false
console.log("v is "+v)          // false
let vi =  !(4 < 3)              // true
console.log("vi is "+vi)        // true
let vii = !(false)              // true
console.log("vii is "+vii)      // true
let viii = !(4 > 3 && 10 < 12)  // false
console.log("viii is " + viii)  // false
let ix = !(4 > 3 && 10 > 12)    // true
console.log("ix is " + ix)      // true
let x = !(4 === '4')            // true
console.log("x is " + x)        // true
let xi = !(wordOne.includes("on") && wordTwo.includes("on"))
console.log(xi)

//7 Use the Date object to do the following activities
console.log("\tExcercises Level 7")
const now = new Date()    
    //i What is the year today?
    console.log("The year is right now is " + now.getFullYear())
    //ii What is the month today as a number?
    console.log("The month is " + now.getMonth()) // When i did it this excersice is february - number 1
    //iii What is the date today?
    console.log("The date is " + now.getDate())
    //iv What is the day today as a number?
    console.log("the day of week is " + now.getDay())
    //v What is the hours now?
    console.log("the hour is " + now.getHours())
    //vi What is the minutes now?
    console.log("the minutes is " + now.getMinutes())
    //vii Find out the numbers of seconds elapsed from January 1, 1970 to now.
    console.log("the seconds that have passed since 1970 is "+ now.getTime())