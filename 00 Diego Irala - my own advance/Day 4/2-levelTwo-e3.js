//3 Check if a day is weekend day or a working day. Your script will take day as an input.
let whatDay = prompt("What is the day today?") 


let day = whatDay.toLowerCase()
let workingDay = new Array("monday", "thursday","wednesday","thuesday","friday")
let weekendDay = new Array("saturday","sunday")
if(workingDay.includes(day)){
    alert(`${day[0].toUpperCase()+day.slice(1,day.length)} is a working day`)
}
else if(weekendDay.includes(day)){
    alert(`${day[0].toUpperCase()+day.slice(1,day.length)} is a weekend`)
}