// EXSERCISES LEVEL 3
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
  
const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1 Copy countries array(Avoid mutation)
const copyCountries = [...countries]
console.log(copyCountries)


//2 Arrays are mutable. Create a copy of array which does not modify the original. 
// Sort the copied array and store in a variable sortedCountries
const sortedCountries = countries.sort()
console.log(sortedCountries)

//3 Sort the webTechs array and mernStack array
webTechs.sort()
mernStack.sort()
console.log(webTechs)
console.log(mernStack)

//4 Extract all the countries contain the word 'land' from the countries array and print it as array
let landArray = []
for(i =0 ; i<countries.length; i++){
    if(countries[i].includes("land")){
        landArray.push(countries[i])
    }
}

console.log(landArray)

//5 Find the country containing the hightest number of characters in the countries array
const lenCountries = []
i = 0
for(const element of countries){
    lenCountries[i]= element.length
    i+=1

}

const maxChar = Math.max(...lenCountries)
console.log(maxChar)

for(const element of countries){
    if(element.length===8){
        console.log(element)
    }
}

//6 Extract all the countries contain the word 'land' from the countries array and print it as array
landArray=[]
for(const element of countries){
    if(element.includes("land")){
        landArray.push(element)

    }
}
console.log(landArray)

//7 Extract all the countries containing only four characters from the countries array and print it as array
let numberOfCharacter = 4
let fourArray = []
console.log(countries)
for(const element of countries){
    if(element.length ===4){
        fourArray.push(element)
    }

}
console.log(fourArray)


//8 Extract all the countries containing two or more words from the countries array and print it as array
let moreTwoWords = []
for(const element of countries){
    if(element.length>2){
        moreTwoWords.push(element)
    }
}
console.log(moreTwoWords)

//9 Reverse the countries array and capitalize each country and stored it as an array
let capitalizeArray = []
countries.reverse
for(const element of countries){
    capitalizeArray.push(element.toUpperCase())
}
console.log(capitalizeArray)
