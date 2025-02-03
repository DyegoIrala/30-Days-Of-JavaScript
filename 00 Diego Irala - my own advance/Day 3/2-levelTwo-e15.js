//Create a human readable time format using the Date time object


// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let now = new Date()

let year = now.getFullYear()
let month = now.getMonth()+1
let day = now.getDate()
let hour = now.getHours()
let minute = now.getMinutes()
console.log(now)

console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
//First Format YYYY-MM-DD HH:mm
console.log(`${year}-${month}-${day} ${hour}:${minute}`)
//Second Format DD-MM-YYYY HH:mm
console.log(`${day}-${month}-${year} ${hour}:${minute}`)
//Third Format DD/MM/YYYY HH:mm
console.log(`${day}/${month}/${year} ${hour}:${minute}`)
