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
    function suma(array){
        for(i = 0;i<array.length;i++){
            avgValue=avgValue+array[i]}
        avgValue = avgValue/array.length
        console.log(avgValue)
    }

    suma(ages)

    //Find the range of the ages(max minus min)
    console.log(Math.max(...ages))
    console.log(Math.min(...ages))

    //Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array