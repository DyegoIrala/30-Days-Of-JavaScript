//1 Using console.log() print out the following statement:
console.log(" the quote \'there is no excercise better for the heart than reaching down and lifting people up\' ")
//2 Using console.log() print out the following quote by Mother Teresa:
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead")
//3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof("10")==typeof(10))
console.log(typeof(Number("10"))==typeof(10))
//4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let stringOne = "9.81"
let numOne = parseFloat(stringOne)
let numTwo = 10
console.log(numOne, typeof numOne)
console.log(numOne == numTwo )
numOne = Math.ceil(numOne)
console.log(numOne==numTwo)
//5 Check if 'on' is found in both python and jargon
let wordOne = "python" 
let wordTwo = "jargon"
console.log(wordOne.includes("on") && wordTwo.includes("on"))
//6 I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentenceOne ="I hope this course is not full of jargon"
console.log(sentenceOne.includes("jargon"))
//7 Generate a random number between 0 and 100 inclusively.
const numRandom = Math.min((Math.ceil(Math.random()*100+0.1)),100)
console.log(numRandom)
//8 Generate a random number between 50 and 100 inclusively.
let numRandomTwo = Math.max((Math.min((Math.ceil(Math.random()*100+0.1)),100)),50) // this way is very searching, also number 50 has half possibilites
console.log(numRandomTwo)
numRandomTwo = Math.floor(Math.random()*50) + 50
console.log(numRandomTwo) // the correct way
//9 Generate a random number between 0 and 255 inclusively.
let numRandomThree = Math.floor(Math.random()*255)+1
console.log(numRandomThree)

for(i =0; i<=1000;i++){   
    let nrf = Math.floor(Math.random()*255)+1
    if(nrf <=1){
        console.log("si funciona",nrf)
        }
}// This is a test to see if the way for obtain a number one 
//10 Access the 'JavaScript' string characters using a random number.
let newString = "JavaScript"
let character= Math.floor(Math.random()*(newString.length))
console.log(newString[character])

//11 Use console.log() and escape characters to print the following pattern.
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")
//12 Use substr to slice out the phrase because because because from the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
let phraseOne = "you cannot end a semtence with because because because is a conjunction"
console.log(phraseOne.substr(31,23))