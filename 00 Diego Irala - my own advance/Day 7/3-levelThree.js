// EXCERCISES LEVEL 3
//1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
//  It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser(numberOfCharacter,numberOfIds){
    let arr = []
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456798"
    
    for(i=0;i<numberOfIds;i++){
        let id = ""
        for(j=0;j<numberOfCharacter;j++){
            let randomNum = Math.floor(Math.random()*(character.length+1))
            id = id + character[randomNum]


        }
        arr[i]=id
    }
    return arr

}
console.log(userIdGeneratedByUser(10,2))

//2 Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorsGenerator(){
    let randomNum = []
    
    for(i=0;i<3;i++){
        randomNum[i] = Math.floor(Math.random()*256)
    }
    let rgb = `rgb(${randomNum[0]},${randomNum[1]},${randomNum[2]})`
    return rgb
}

console.log(rgbColorsGenerator())

//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(){
    let string = []
    for(i=0;i<3;i++){
        string[i] = (Math.floor(Math.random()*256)).toString(16)
        

    }
    return string

}
console.log("////////Array of hexacolor")
console.log(arrayOfHexaColors())

//4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(){
    let string = []
    for(i=0;i<3;i++){
        string[i] = (Math.floor(Math.random()*256))
        

    }
    return string

}

console.log(arrayOfRgbColors())

//5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexatoRgb(hexa){
    let rgb =[]
    for(i=0;i<3;i++){
        switch (i){
            case 0:
                rgb[i] = parseInt(hexa.slice(1,3),16)
                break

            case 1:
                rgb[i] = parseInt(hexa.slice(3,5),16)
                break

            case 2:
                rgb[i] = parseInt(hexa.slice(5,7),16)
                break 

        }
        
        


    }
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`


}
let color = "#cbcd2e"
console.log(color)
console.log(convertHexatoRgb(color))



//6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbTohexa(rgbColor){
    let regExpOne = /\d+/g
    let newString = rgbColor.match(regExpOne)
    let hexa =[]
    for(i=0;i<3;i++){
        switch(i){
            case 0:
                hexa[i]=(parseInt(newString[i])).toString(16)
                break

            case 1:
                hexa[i]=(parseInt(newString[i])).toString(16)
                break
            case 2:
                hexa[i]=(parseInt(newString[i])).toString(16)
                break
        }
    }



    return `#${hexa[0]}${hexa[1]}${hexa[2]}` 

}

color = "rgb(150, 120, 136)"

console.log(color)
console.log(convertRgbTohexa(color))

//7 Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(typeGenerate,amount){
    let arr = []
    for(let i=0;i<amount;i++){
        let color = rgbColorsGenerator()
        if(typeGenerate === "hexa"){
            arr[i]=convertRgbTohexa(color)
        }
        else if(typeGenerate === "rgb"){
            arr[i]= color
            
        }
        else{
            arr[i] = "Incorrect Type"
        }
        

    }
    return arr

}


console.log(generateColors("rgb",2))
console.log(generateColors("hexa",3))

//8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function randomShufflePosition(array){
    let newArray = []
    let randomArray = []
    let random
    for(i=0;i<array.length;i++){
        random = Math.floor(Math.random()*array.length)
        if (i === 0 ){
            randomArray[i] = random
        }
        else{
            while(randomArray.includes(random)){
                random = Math.floor(Math.random()*array.length)
            }
            randomArray[i] = random
        }
        
    }
    for(let j =0 ;j<array.length; j++){
        newArray[j]=array[randomArray[j]]
    }
    return newArray

}
let testShuffleArray = [23,145,464,32,436,3]
console.log(randomShufflePosition(testShuffleArray))


function shuffleArray(array){
    let newArray = []
    let count = array.length -1
    for(let i = 0 ; i<array.length;i++){
        newArray[i]= array[count]

        count -=1

    }
    return newArray
}
testShuffleArray = [1,2,3,4,5]
console.log(shuffleArray(testShuffleArray))



//9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(number){
    let factorial = 1
    if(number === 0||number ===1){
        factorial = 1
    }
    
    for(i=1;i<=number;i++){
        factorial = factorial *i
        
    }
    return factorial
}

console.log(factorial(6))

//10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(value){
    if(value === null || value === undefined){
        return true
    }
    if(typeof(value)==="string"|| Array.isArray(value)){
        return value.length===0
    }
    if(typeof(value)==="object"){
        return Object.keys(value).length === 0
    }
    return false
}


console.log(isEmpty(null))
console.log(isEmpty(undefined))
console.log(isEmpty(""))
console.log(isEmpty([]))
console.log(isEmpty({}))


//11 Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...arr){
    let sumElement=0
    for(const element of arr){
        sumElement+=element

    }
    return sumElement
    

}
console.log(sum(1,2,5,6))

//12 Write a function called sumOfArrayItems, 
// it takes an array parameter and return the sum of all the items. 
// Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array){
    let sumElement=0
    for(const element of array){
        sumElement+=element



    }
    return sumElement

}
console.log(sumOfArrayItems([1,2,3,4,5,90]))

//13 Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. If not give return reasonable feedback.

function average(arr){
    
    let sum = 0
    for(let i=0;i<arr.length;i++){
        if(isNaN(arr[i])){
            return `In the array exist a value that not is a numnber: ${arr[i]} y the position is ${i}`
        }
    }
    for(const element of arr){
        sum += element
    }
    return [sum,arr.length,(sum/arr.length),i]

}

console.log(average([1,2,3,15,65]))

//14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
// If the array length is less than five it return 'item not found'.

function modifyArray(arr){
    if(arr.length<5){
        return "item not found"
    }
    let newArray =arr.splice(0,4)
    newArray.push(arr[0].toUpperCase())
    return newArray



}


console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot',"asdf"]));

//15 Write a function called isPrime, which checks if a number is prime number.

function isPrime(number){
    let countPrime = 0
    if(number>1){
        for(i=1;i<=number;i++){
            if(number%i ==0 ){
                countPrime +=1
            }
        }
        if(countPrime==2){
            return "Is a Prime number"
        }
        else{
            return "Is not a prime number"
        }
    }

}

console.log(isPrime(3))

//16 Write a functions which checks if all items are unique in the array.
function uniqueItemsArray(arr){
    for(i=0;i<arr.length;i++){
        let newArray = arr.slice()
        newArray.splice(i,1)
        if(newArray.includes(arr[i])){
            return "The array has not a unique items"
        }
    }
    return "the array has a unique items"
}

arrayTwo = [1,2,3,4,2]
console.log(uniqueItemsArray(arrayTwo))

//17 Write a function which checks if all the items of the array are the same data type.
function dataTypeArrayCheck(arr){
    let firsDataType= typeof(arr[0])
    for(i=1;i<arr.length;i++){
        if(typeof(arr[i])!==firsDataType){
            return "The items have a diferent data type"
        }
    }
    return `All items are a same data type, the data type is: ${firsDataType}`
}

console.log(dataTypeArrayCheck([1,2,3]))

//18 JavaScript variable name does not support special characters or symbols except $ or _. 
// Write a function isValidVariable which check if a variable is valid or invalid variable. 


function isValidVariable(variableName){
    const regex =/^[a-zA-Z_$][a-zA-Z-0-9_$]*$/
    return regex.test(variableName)
     
}

console.log(isValidVariable("@dueg"))

//19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomSevenNumbers(){
    let randomNum
    let sevenArray =[]
    for(i=0;i<7;i++){
        randomNum = Math.floor(Math.random()*10)
        if(i==0){
            sevenArray[i]=randomNum
        }
        else{
            randomNum = Math.floor(Math.random()*10)
            while(sevenArray.includes(randomNum)){
                randomNum = Math.floor(Math.random()*10)
            }
            sevenArray[i]=randomNum
        }
    }
    return sevenArray
}

console.log(randomSevenNumbers())

//20 Write a function called reverseCountries, 
// it takes countries array and first it copy the array and returns the reverse of the original array

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
function reverseCountries(countries){

    return countries.reverse()
}

console.log(reverseCountries(countries))


