//1 Write a code which can give grades to students according to theirs scores: 
let scoreStudent = 90

if(scoreStudent >=80 && scoreStudent <=100){
    console.log("A")
}
else if(scoreStudent >= 70 && scoreStudent <= 79){
    console.log("B")
}
else if (scoreStudent >=60 && scoreStudent <=69){
    console.log("C")
}
else if (scoreStudent >= 50 && scoreStudent <= 59){
    console.log("D")
}
else if (scoreStudent >0){
    console.log("F")
}
else{
    console.log("incorrect number")
}

//2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is : 
    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer

//User input
let month = "january"
month = month.toLowerCase()
console.log(month)
if(month === "september" ||month === "october"||month === "december"){
    console.log("Autumn")
}
else if(month === "december" ||month === "january"||month === "february"){
    console.log("Winter")
}
else if(month === "march" ||month === "abril"||month === "may"){
    console.log("Spring")
}
else if(month === "june" ||month === "july"||month === "august"){
    console.log("Summer")
}
else{
    console.log("this does not exist")
}




