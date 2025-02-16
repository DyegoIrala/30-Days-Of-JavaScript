//1 Develop a small script which generate any number of characters random id:

const character = "abcdefghijklmnopqrstuvwxyz1234567890"

let randomNum = Math.floor(Math.random()*character.length)
let newCharacter = character[randomNum]
console.log(newCharacter) 

//2 Write a script which generates a random hexadecimal number.

const color = Math.floor(Math.random()*16777215).toString(16)
console.log("#"+color)

//3 Write a script which generates a random rgb color number.
let arrayColor = []
for(i=0; i<3;i++){
    arrayColor[i]=Math.floor(Math.random()*256)
}

console.log(`rgb(${arrayColor[0]},${arrayColor[1]},${arrayColor[2]})`)

//4 Using the above countries array, create the following new array.
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

let newArray = []
for(i=0;i<countries.length;i++){
    newArray[i]=countries[i].toUpperCase()
}
console.log(newArray)

//5 Using the above countries array, create an array for countries length'.

let lenghCountries =[]
for(i=0;i<countries.length;i++){
    lenghCountries[i]= countries[i].length
    
}
console.log(lenghCountries)

//6 Use the countries array to create the following array of arrays:
newArray = new Array(countries.length)
let tableArray = []


for(i = 0 ;i <countries.length;i++){
    tableArray[i] =[countries[i], countries[i].slice(0,3).toUpperCase(),countries[i].length]
}
console.log(tableArray)

//7 In above countries array, check if there is a country or countries containing the word 'land'. 
// If there are countries containing 'land', print it as array. If there is no country containing the word 'land', 
// print 'All these countries are without land'.
console.log("Excercise 7 ")
 let arrayLand = []
 let arrayNotLand=[]
 let withLand =0
 let withoutland=0
for(i = 0 ;i <countries.length;i++){
    
    if(countries[i].includes("land")){
        
        arrayLand[withLand]=countries[i]
        withLand +=1
    }
    else{
        arrayNotLand[withoutland]=countries[i]
        withoutland +=1
    }

}

if(withLand>0){
    console.log(arrayLand)
}
else{
    console.log(arrayNotLand)
}  

//8 In above countries array, check if there is a country or countries end with a substring 'ia'. 
// If there are countries end with, print it as array. If there is no country containing the word 'ai', 
// print 'These are countries ends without ia'.

let subs = "ia"
let extraction
const arrayIa = []
const arrayNotIa = []
let withIa =0
let withoutIa=0

for(i=0; i<countries.length;i++){

    extraction = countries[i].endsWith(subs)
    if(extraction == true  ){
        arrayIa[withIa]=countries[i]
        withIa +=1  
    }
    else{
        arrayNotIa[withoutIa]=countries[i]
        withoutIa +=1
        
    }

}
if(withIa>0){
    console.log(arrayIa)

}
else{
    console.log(arrayNotIa)
}



//9 Using the above countries array, find the country containing the biggest number of characters.

let maxLength = Math.max(...lenghCountries)

let bigCountriesCharacters= []
let j = 0

for(i=0;i<countries.length;i++){
    if(countries[i].length ===maxLength){
        bigCountriesCharacters[j]=countries[i]
        j+=1

    }
}

console.log(bigCountriesCharacters)

//10 Using the above countries array, find the country containing only 5 characters.
j=0
let fiveCountriesCharacter = []
for(i=0;i<countries.length;i++){
    if(countries[i].length === 5){
        fiveCountriesCharacter.push(countries[i])
    }
}

console.log(fiveCountriesCharacter)


//11 Find the longest word in the webTechs array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

let numberOfCharacter = []
for(i=0; i < webTechs.length; i++){
    numberOfCharacter[i]=webTechs[i].length
}
console.log(numberOfCharacter)
let maxWord = Math.max(...numberOfCharacter)
 
let maxWebTechs = []

for(i =0 ; i <webTechs.length; i++){
    if(webTechs[i].length===10)
        maxWebTechs.push(webTechs[i])
   
}

console.log(maxWebTechs)



//12 Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let newWebTechs = []
for(i=0; i < webTechs.length; i++){
    newWebTechs[i]=[webTechs[i], webTechs[i].length]
}
console.log(newWebTechs)

//13 An application created using MongoDB, Express, React and Node is called a MERN stack app. 
// Create the acronym MERN by using the array mernStack
let app = ["MongoDb","Express","React","Node"]
console.log(app)
let arrayMern = []

for(i=0; i< app.length; i++){
    arrayMern[i]=app[i][0]
}
let mernStack = arrayMern.join("")
console.log(mernStack)

//14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
// using a for loop or for of loop and print out the items.

let languages = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(i =0; i < languages.length;i++){
    console.log(languages[i])
}

//15  This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruitArray = ['banana', 'orange', 'mango', 'lemon']
fruitArray.sort().reverse()
console.log(fruitArray)


//16 Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
console.log("Excercise 16")

for(i=0; i<fullStack.length;i++){
    for(j=0; j<fullStack[i].length;j++){
        console.log(fullStack[i][j])
    }
}
