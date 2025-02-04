//1 Write a program which tells the number of days in a month.

let year = new Date().getFullYear()
let monthVar = prompt("Enter the month")
let monthLower = monthVar.toLowerCase()
let monthNumber
let condition = true
let monthWithFormat
switch(monthLower){
    case "january":
        monthNumber = 1 
        break
    case "february":
        monthNumber =2
        break
    case "march":
        monthNumber =3
        break
    case "april":
        monthNumber =4
        break
    case "may":
        monthNumber =5
        break
    case "june":
        monthNumber =6
        break
    case "july":
        monthNumber =7
        break
    case "agost":
        monthNumber =8
        break
    case "february":
        monthNumber =2
        break
    case "february":
        monthNumber =2
        break
    case "february":
        monthNumber =2
        break
    case "february":
        monthNumber =2
        break
    case "february":
        monthNumber =2
        break
    default:
        condition = false

    
}

if(condition = false){
    alert("Incorrect Answer")
}
else{
    days = new Date(year,monthNumber,0).getDate()
    monthWithFormat = `${monthLower[0].toUpperCase()+monthLower.slice(1,monthLower.length)}`
    alert(`${monthWithFormat} has a ${days} days. `)
}

