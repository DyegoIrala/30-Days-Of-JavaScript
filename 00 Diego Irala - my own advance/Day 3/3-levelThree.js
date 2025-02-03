//15 Create a human readable time format using the Date time object. 
//  The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) 

let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()+1
let day = now.getDate()
let hour =now.getHours()
let minute = now.getMinutes()
if(hour>=12){
    hour = hour - 12
    hour <10? hour = `0${hour}`:hour
}
if(minute<10){
    minute = `0${minute}`   
}
console.log(hour)
console.log(minute)

console.log(`${year}-${month}-${day} ${hour}:${minute}`)

