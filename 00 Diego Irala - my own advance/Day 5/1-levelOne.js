//1 Declare an empty array;
let emptyArray = []
console.log(emptyArray)

//2 Declare an array  with more than 5 number of element
let arrOne = ["The firs item",2,3,4,5.6,"The last item"]
console.log(arrOne)
//3 Find the length of your array
console.log(arrOne.length)
//4 Get the first item, the middle item and the last item of the array
console.log(arrOne[0])
console.log(arrOne[Math.round((arrOne.length-1)*0.5)])
console.log(arrOne[arrOne.length-1])

console.log(Math.round(2.15))

//5 Decalare an array called mixedDataTypes, 
// put different data types in the array and find the lenght of the array. the array size should be greater than 5

let mixeedDataTypes = [7523, "React", 2.654, false,true,"Diego",[1,2,3]]


//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]

//7 Print the array using console.log()
console.log(itCompanies)
//8 Print the number of companies
console.log(itCompanies.length)

//9 Print the first company, middle and the last company
console.log(itCompanies[0])
console.log(itCompanies[Math.round((itCompanies.length-1)*0.5)])
console.log(itCompanies[itCompanies.length-1])

//10 Print out each company
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])



// console.log(`\t Excercise 10`)
// for(i =0; i<=itCompanies.length-1;i++){
//     console.log(itCompanies[i])
// }

//11 Change each company name to uppercase one by one and print them out

itCompanies[0]=itCompanies[0].toUpperCase()
itCompanies[1]=itCompanies[1].toUpperCase()
itCompanies[2]=itCompanies[2].toUpperCase()
itCompanies[3]=itCompanies[3].toUpperCase()
itCompanies[4]=itCompanies[4].toUpperCase()
itCompanies[5]=itCompanies[5].toUpperCase()
itCompanies[6]=itCompanies[6].toUpperCase()
console.log(itCompanies)

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)
console.log(`${itCompanies.slice(0,6).join(", ")} and ${itCompanies[itCompanies.length-1]} are big IT companies`)

//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let otherCompany = "certain"
if(itCompanies.includes(otherCompany)){
    console.log(otherCompany)
}
else{
    console.log("Company is not found")

}

//14 Filter out companies which have more than one 'o' without the filter method
console.log("\t\t The real excercise 14")

let result = []
let newIndex = 0
for(i = 0 ;i<itCompanies.length;i++){
    let count = 0
    for (j=0;j<itCompanies[i].length;j++){
        letter = itCompanies[i][j].toLowerCase()
        if(letter === "o"){
            count = count +1
        }
    }
    if(count <=1){
        result[newIndex] = itCompanies[i]
        newIndex++
    }
}
console.log(result)

//15 Sort the array using sort() method

itCompanies.sort()
console.log(itCompanies)

//16 Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

//17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(3,itCompanies.length))

//18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(0,itCompanies.length-3))

//19 Slice out the middle IT company or companies from the array
console.log("\t\t Excercise 19")
itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)

if(itCompanies.length%2 ==0){
    initialIndex = Math.floor(itCompanies.length-1)/2
    finalIndex = initialIndex +2
    console.log(itCompanies.slice(initialIndex,finalIndex))
}
else{
    initialIndex = Math.floor(itCompanies.length-1)/2
    finalIndex = initialIndex +1
    console.log(itCompanies.slice(initialIndex,finalIndex))
}

//20 Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies) //delete facebook


//21 Remove the middle IT company or companies from the array
console.log("\t\t Excercise 20")
itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]

if(itCompanies.length%2 ==0){
    initialIndex = Math.floor(itCompanies.length-1)/2
    finalIndex = 2
    itCompanies.splice(initialIndex,finalIndex)
}
else{
    initialIndex = Math.floor(itCompanies.length-1)/2
    finalIndex = 1
    itCompanies.splice(initialIndex,finalIndex)
}
console.log(itCompanies)

//22 Remove the last IT company from the array

itCompanies.splice(itCompanies.length-1,1)
console.log(itCompanies)

//23 Remove all IT companies
itCompanies = []
console.log(itCompanies)