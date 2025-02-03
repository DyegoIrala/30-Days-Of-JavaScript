// 5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
let m = 2
let y = 0
let x =0
let interceptX = (m+y) /2
let interceptY = m*x-2
console.log("the intercept nin X is "+ interceptX)
console.log("the intercept nin Y is "+ interceptY)

//6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let pointOne = new Array(2,2)
let pointTwo = new Array(6,10)
let m2 = (pointTwo[1]-pointOne[1])/(pointTwo[0]-pointOne[0])
console.log("the slope is", m2)

//7 Compare the slope of above two questions.

console.log(m ==m2)

//8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. 
x = 0
y= x*x + 6*x + 9
console.log(y)
x = 1
y= x*x + 6*x + 9
console.log(y)
x = -1
y= x*x + 6*x + 9
console.log(y)
x = -2
y= x*x + 6*x + 9
console.log(y)
x = -3
y= x*x + 6*x + 9
console.log(y) // for the 0 value for Y x should be -3

``
