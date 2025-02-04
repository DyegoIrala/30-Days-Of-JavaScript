//2 Compare the values of myAge and yourAge 
// using if … else. Based on the comparison and log the result to console stating who is older 
// (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 26
let yourAge = prompt("Enter you age")
let difference = Math.abs(myAge-yourAge)

if(myAge < yourAge){
    alert(`You are ${difference} older than me`)

}
else if(myAge>yourAge){
    alert(`You are ${difference} younger than me`)
}