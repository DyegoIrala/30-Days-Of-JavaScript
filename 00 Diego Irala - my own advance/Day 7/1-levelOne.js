//EXCERCISES LEVEL 1

//1 Declare a function fullName and it print out your full name.
function fullname(){
    let name = "Diego"
    let surName = "Irala"
    
    console.log(`Your name is ${name} ${surName}`)

}

fullname()

//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullname(){
    let name = "Diego"
    let surName = "Irala"
    
    console.log(`Your name is ${name} ${surName}`)

}

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(parm1,parm2){
    let sum = 0
    sum = parm1+parm2
    return sum

}

console.log(addNumbers(10,20))

//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length,width){
    let area = length*width
    return area
}

console.log(areaOfRectangle(5,5))

//5 A perimeter of a rectangle is calculated as follows: 
// perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length,width){
    let perimeter = 2 * length + 2* width
    return perimeter
}
console.log(perimeterOfRectangle(2,3))

//6 A volume of a rectangular prism is calculated as follows: 
// volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length,width,height){
    let volume = length * width * height
    return volume
}

console.log(volumeOfRectPrism(2,3,10))

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(radius){
    return Math.PI*radius*radius
}
console.log(areaOfCircle(2))

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius){
    return 2*radius*Math.PI
}

console.log(circumOfCircle(3))

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass,volume){
    return mass/volume
}
console.log(density(20,10))

//10 Speed is calculated by dividing the total distance covered by a moving object 
// divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed
function speed(distance,time){
    return (distance/time)
}

console.log(speed(100,5))

//11 Weight of a substance is calculated as follows: 
// weight = mass x gravity. Write a function which calculates weight.

function Weight(mass){
    return mass*9.81
}

console.log(Weight(90))

//12 Temperature in oC can be converted to oF using this formula: 
// oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(temperature){
    let fah = (temperature * 9/5) +32
    return fah
}
console.log(convertCelsiusToFahrenheit(32))

//13 Body mass index(BMI) is calculated as follows: 
// bmi = weight in Kg / (height x height) in m2. 
// Write a function which calculates bmi. 
// BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.

function BMI(weight,height){
    let bmi= weight/(height*height)
    if(bmi<18.5){
        console.log("Underweight")
    }
    else if(bmi<24.9){
        console.log("Normal weight")
    }
    else if(bmi<29.9){
        console.log("Overweight")
    }
    else{
        console.log("Obese")
    }
}

BMI(55,1.70)

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

  function checkSeason(month){
    month = month.toLowerCase()
    if (["december","january","february"].includes(month)){
        console.log("Winter")
    }
    else if(["march","april","may"].includes(month)){
        console.log("Spring")
    }
    else if(["june","july","august"].includes(month)){
        console.log("Summer")
    }
    else if(["september","october","november"].includes(month)){
        console.log("Autumn")
    }
  }

  //15 Math.max returns its largest argument. 
  // Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

  function maxValue(){
    let sum = 0
    return Math.max(...arguments)
  }

  console.log(maxValue(1,2,50,4,5))


  