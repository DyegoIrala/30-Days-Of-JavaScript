//13 Using prompt get the year the user was born and if the user is 18 or above allow 
// the user to drive if not tell the user to wait a certain amount of years.
let birthYear = Number(prompt("Enter birth year"))
let now = new Date()
let newAge = Number(now.getFullYear())-birthYear

if(newAge<18){
    console.log(`You are ${newAge}. You are not enough to drive.`)
}
else{
    console.log(`You are ${newAge}. You will be allowed to drive after 3 years.`)
}
