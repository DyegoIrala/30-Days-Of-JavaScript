//1 The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,25]
    //Sort the array and find the min and max age
   ages.sort()
   console.log(ages)
    //Find the median age(one middle item or two middle items divided by two)
    let newArray = []
    if(ages.length %2 ==0){
        let indexOne = Math.floor((ages.length-1)/2) 
        newArray = ages.slice(indexOne,indexOne+2) 
        
    }
    else{
        let indexOne = Math.floor((ages.length-1)/2) 
        newArray = ages.slice(indexOne,indexOne+1) 
    }   
    console.log(newArray)
    //Find the average age(all items divided by number of items)
    let avgValue = 0
    function average(array){
        for(i = 0;i<array.length;i++){
            avgValue=avgValue+array[i]}
        avgValue = avgValue/array.length
        console.log(avgValue)
        return avgValue
    }

    average(ages)

    //Find the range of the ages(max minus min)
    console.log(Math.max(...ages))
    console.log(Math.min(...ages))

    //Compare the value of (min - average) and (max - average), use abs() 
    // method 1.Slice the first ten countries from the countries array
    let avgValueTwo = average(ages)
    console.log(Math.max(...ages)== avgValue)
    console.log(Math.min(...ages)== avgValue)

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

    let tenCountries = countries.slice(0,10)
    console.log(tenCountries)

     //2 Find the middle country(ies) in the countries array
     console.log(countries)
     console.log(countries.length)
     let middleCountries = []
     if(countries.length%2 ==1){
        let starIndex = Math.floor((countries.length-1)/2)
        let endIndex = starIndex +1
        middleCountries = countries.slice(starIndex,endIndex)
        
        
     }
     else{
        let starIndex = Math.floor((countries.length-1)/2)
        let endIndex = starIndex +2
        middleCountries = countries.slice(starIndex,endIndex)
                       
     }

     console.log(middleCountries)

     //3 Divide the countries array into two equal arrays if it is even. 
     // If countries array is not even , one more country for the first half.

     let countriesOne
     let countriesTwo
    //  countries.push("delete")
     console.log(countries.length)

     if(countries.length%2 ==0){
        endIndex=Math.floor((countries.length-1)/2)+1
        countriesOne = countries.slice(0,endIndex)
        countriesTwo = countries.slice(endIndex,countries.length)

     }
     else{
        endIndex=Math.floor((countries.length-1)/2)+1
        countriesOne = countries.slice(0,endIndex)
        countriesTwo = countries.slice(endIndex,countries.length)
     }

     console.log(countriesOne)
     console.log(countriesTwo)
     
