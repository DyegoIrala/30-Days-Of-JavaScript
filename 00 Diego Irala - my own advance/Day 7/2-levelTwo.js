// EXCERSISES LEVEL 2

//1 Linear equation is calculated as follows: ax + by + c = 0. 
// Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a,b,c,x=null,y=null){
    if(x==null && y== null){
        console.log("You should insert a number for x or y")
    }
    else if(y==null){
        y = -(c/b)-(a/b)*x
        console.log(`EL VALOR DE Y PARA X = ${x} es Y = ${y}`)
    }
    else if(x==null){
        x = -(c/a)-(b/a)*y
        console.log(`EL VALOR DE Y PARA X = ${y} es Y = ${x}`)
    }
    else{
        console.log("Inserte solo un valor para x o y")
    }

}

solveLinEquation(1,3,2,null,2)



//2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log("#### Quadratic equation")
function solveQuadEquation(a,b,c){
    x1 = (-b+Math.sqrt(b*b-4*a*c))/(2*a)
    x2 = (-b-Math.sqrt(b*b-4*a*c))/(2*a)
    if(Number.isNaN(x1) || Number.isNaN(x1)){
        string="the equation does not solution"
        return string
    }
    else{
        return [x1,x2]

    }
    
    
}
console.log(solveQuadEquation(1,9,98))

//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
    }

}



printArray([1,5,3,67,2])

//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime(){
    data =  new Date()
    day = data.getDate()
    month = data.getMonth()+1
    year = data.getFullYear()
    hour = data.getHours()
    minutes = data.getMinutes()

    console.log(`${day}/${month}/${year} ${hour}:${minutes}`)

}

showDateTime()

//5 Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y){
    x1 = y
    y1 = x

    return [x1,y1]
}
console.log(swapValues(2,5))

//6 Declare a function name reverseArray. 
// It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr){
    let newArray = []
  
    for (i=(arr.length-1);i>=0;i--){
        newArray.push(arr[i])
        
    }
    return newArray

}

console.log(reverseArray([1,2,3,4,5,6]))

//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr){
    newArray =[]
    for(i=0;i<arr.length;i++){
        newArray[i]= arr[i].toUpperCase()

    }
    return newArray
    
}

console.log(capitalizeArray(["First phrase","second phrase"]))

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr,item){
    arr.push(item)
    return arr
}

let arrayTwo = [1,2,3]
console.log(addItem(arrayTwo,"hello"))

//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(arr,index){
    arr.splice(index,1)
    return arr


}
newArray = [2,1235,6,3,2,"Santa Cruz"]
console.log(removeItem(newArray,5))

//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number){
    let sum = 0
    for(i=0;i<=number;i++){
        sum = sum+i
    }
    return sum

}

console.log(sumOfNumbers(100))

//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(range){
    let oddSum = 0
    for(i=2;i<=range;i++){
        if(i==2){
            oddSum = oddSum + i
        }
        else if(i>2){
            let primeCount = 0
            for(j=1;j<=i;j++){
                if(i%j === 0){
                    primeCount = primeCount + 1
                    
                }              
            }
            if (primeCount === 2){
                oddSum = oddSum + i
            }
        }
    }
    return oddSum
}


console.log(sumOfOdds(100))

//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(range){
    let sumEven = 0
    for(i=2; i<=range;i++){
        if(i%2 === 0){
            sumEven = sumEven + i
        }

    }
    return sumEven

}

console.log(sumOfEven(100))

//13 Declare a function name evensAndOdds . 
// It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evenAndOdds(number){
    let evenNumber = 0
    let oddNumber = 0

    for(i=0;i<=number;i++){
        if(i%2 === 0){
            evenNumber += 1

        }
        else{
            oddNumber +=1
        }
    }
    console.log(`The number of odds are ${oddNumber}\nThe number of even are ${evenNumber}`)

}

evenAndOdds(100)

//14 Write a function which takes any number of arguments and return the sum of the arguments

function sumArguments(){
    let sum = 0
    for(i =0;i<arguments.length;i++){
        sum = sum + arguments[i]
    }
    return sum
}

console.log(sumArguments(1,2,3,4,5))

//15 Writ a function which generates a randomUserIp.

function randomUserIp(){
    console.log(`${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}.${Math.floor(Math.random()*256)}`)

}

randomUserIp()

//16 Write a function which generates a randomMacAddress
function randomMacAddres(){
    let macAdress = ""
    let count = 0
    let letter = ["A","B","C","D","E","F"]
    for(i=1;i<=17;i++){
        count +=1
        if (count ===3){
            count = 0
            macAdress = macAdress + ":"
        }
        else{
            let random = Math.floor(Math.random()*2)
            if (random === 1){
                //here is a number
                randomNumber = Math.floor(Math.random()*10)
                macAdress = macAdress + randomNumber
            }
            else{
                //here is a Character
                randomNumber = Math.floor(Math.random()*6)
                macAdress = macAdress + letter[randomNumber]}
    

        }
        
        console.log(count)


        
        
    }
    return macAdress

}

randomMacAddres()
console.log(randomMacAddres())

//17 Declare a function name randomHexaNumberGenerator. 
// When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function hexagedecimal(){
    let hexa = ""
    for(i=0;i<3;i++){
    const num = Math.floor(Math.random() * 256)
    let string = num.toString(16)
    hexa = hexa + string

    }
    let final = "#"+hexa
    
    return final
  }
  
  console.log(hexagedecimal())

  //18 Declare a function name userIdGenerator. When this function is called it 
  // generates seven character id. The function return the id.

  function userIdGenerator(){
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let string = ""
    for(i=0;i<7;i++){
        let random = Math.floor(Math.random()*(abc.length+1))
        string = string + abc[random]

    }
    return string
    

  }

  console.log(userIdGenerator())