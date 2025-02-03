//3 Get length and width using prompt and calculate an area of rectangle 
// (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let lenght = Number(prompt('Enter lenght', 'number goes here')) //it works correctly
let width = Number(prompt('Enter witdh', 'number goes here')) //it works correctly
let area = lenght * width 
let perimeter =2*(lenght + width)
console.log("the area of rectangule is "+ area)
console.log("the perimeter of rectangule is "+ perimeter)