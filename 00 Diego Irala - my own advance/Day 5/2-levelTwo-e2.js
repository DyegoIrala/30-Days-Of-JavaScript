//2 First remove all the punctuations and change the string to array and count 
// the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanedText = text.replace(/[^\w\s]|_/g, '').split(" ")

console.log(cleanedText.length)

//13 In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', ' Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
shoppingCart[2] = "Green Tea"
console.log(shoppingCart)

//4 In countries array check if 'Ethiopia' exists in the array if it exists print
//  'ETHIOPIA'. If it does not exist add to the countries list.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

if( countries.includes("Ethiopia")){
    console.log("ETHIOPIA")

}
else{
    countries.push("Ethiopia")
}

//In the webTechs array check if Sass exists in the array and if it exists print 
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.



if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preporcess")

}
else{
    webTechs.push("Sass") 
    console.log(webTechs)
    
}

//6 Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


