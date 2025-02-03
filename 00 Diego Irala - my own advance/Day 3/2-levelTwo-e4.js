//4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) 
// and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = Number(prompt("Radius","Insert the radius here"))
let area = Math.pow(radius,2) * Math.PI
let circunference = 2 * Math.PI * radius
console.log("the area of circle is " + area)
console.log("the circunference of circle is " + circunference)