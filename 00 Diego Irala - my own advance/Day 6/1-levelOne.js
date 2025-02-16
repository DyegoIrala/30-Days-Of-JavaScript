//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
let nums=[]
    //For
    for(i=0;i<=10;i++){
        nums[i]=i
    }
    console.log(nums)

    //while
    i=0
    let whileNums = []
    while(i<=10){
        whileNums[i]=i
        i++
    }
    console.log(whileNums)

    //do while
    i=0
    let doWhileNums = []
    do{
        doWhileNums[i]=i
        i++


    }while (i<=10)

    console.log(doWhileNums)

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop
nums=[]
    //For
    for(i=10,j=0;i>=0;i--){
        nums[j]=i
        j++
    }
    console.log(nums)
    //while
    i=10
    j = 0
    while(i>=0){
        nums[j]=i
        i--
        j++
        

    }
    console.log(nums)
    //do while
    i=10
    j=0
    do{
        nums[j]=i
        i--
        j++

    }while(i>=0)
    console.log(nums)

//3 Iterate 0 to n using for loop
let n = 20 //define n value
for(i=0;i<=n;i++){
    nums[i]=i

}

console.log(nums)

//4 Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
n=7
let characterOne = "#"
let character = "#"
for(i=1;i<=n;i++){
    
    console.log(characterOne)
    characterOne = characterOne+character

}
// Other way
for(i=1;i<=n;i++){
    
    console.log("#".repeat(i))

}

//5 Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
for(i=0;i<=10;i++){
    console.log(`${i} x ${i} = ${i*i} `)
}


//6 Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

for(i=0;i<=10;i++){
    if(i===0){
        console.log("i\t\ti^2\t\ti^3")
    }
    console.log(`${i}\t\t${i*i}\t\t${i*i*i}`)

}

//7 Use for loop to iterate from 0 to 100 and print only even numbers

for(i=0;i<=100;i++){
    if(i===0){
        console.log(i)
    }
    else{
        if(i%2 === 0){
            console.log(i)
        }
    }

}

//8 Use for loop to iterate from 0 to 100 and print only odd numbers

for(i=0;i<=100;i++){
    if(i%2 !==0){
        console.log(i)

    }
}

//9 Use for loop to iterate from 0 to 100 and print only prime numbers
console.log("####################################")
for(i=2; i <=100;i ++){
    let countPrime = 0
    for(j=1;j<=i;j++){
        if(i%j==0){
            countPrime+=1
        }
      
    }
    if(countPrime===2){
        console.log(i)
    }
   
}

//10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum =0
for(i=0;i<=100;i++){
    sum=sum+i
}
console.log(sum)

console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

//11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0
let oddSum = 0

for(i=0;i<=100;i++){
    if(i === 0){
        evenSum = evenSum + 0
    }
    else{
        if(i%2===0){
            evenSum = evenSum+i

        }
        else{
            oddSum=oddSum+i
        }
    }

}


console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}`)

//12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//  Print sum of evens and sum of odds as array

console.log([evenSum,oddSum])

//13 Develop a small script which generate array of 5 random numbers
let randomArray = []
for(i=1;i<=5;i++){
    let numRandom = Math.floor(Math.random()*6)
    randomArray[i-1]= numRandom
}
console.log(randomArray)

//14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
console.log("\t\t\t excercise 14")
let uniqueRandomNum = []
for(i=0;i<=4;i++){
    let randomNum
    if(i==0){
        randomNum = Math.floor(Math.random()*6)
        uniqueRandomNum[i]= randomNum 
    }
    else{
        let condition = true
        while(condition == true){
            randomNum = Math.floor(Math.random()*6)
            let unique =0
            for(let j = 0; j<i;j++){
                
                if(randomNum !== uniqueRandomNum[j]){
                    unique = unique +1
                }
                if(unique == i){
                    unique =0
                    uniqueRandomNum[i]=randomNum
                    condition = false
                }
            }
        }   
    }

}

console.log(uniqueRandomNum)
//Camilo Claure method
console.log("Method my friend Camilo Claure")
uniqueRandomNum = []
for(let i=0;i<=4;i++){
    let randomNum
    if(i==0){
        randomNum = Math.floor(Math.random()*6)
        uniqueRandomNum[i]=randomNum
    }
    else{
        do{
            randomNum = Math.floor(Math.random()*6)          

        }while (uniqueRandomNum.includes(randomNum)==true)
        
        uniqueRandomNum[i]=randomNum
        
    }

}

console.log(uniqueRandomNum)

 



//15 Develop a small script which generate a six characters random id:
let charArray = []
const characterTwo = "abcdefghijklmnopqrstuvwxyz1234567890"
const lenghChar = characterTwo.length
let string
for(let i =0; i<=5;i++){
    randomNum = Math.floor(Math.random()*(lenghChar+1))
    charArray[i]=characterTwo[randomNum]
}

string = charArray.join("")

console.log(string)


    