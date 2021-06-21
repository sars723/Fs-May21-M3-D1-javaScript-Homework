/*

1)
Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.
*/
const sum=function(firstNumber,secondNumber){
    let num1=firstNumber
    let num2=secondNumber
    if(num1===num2){
    return 3*(num1+num2)
    }
    else{
        return num1+num2
    }
    }
    const testSum=sum(3,3)
    console.log("sum="+testSum)
    /*
    2)
    Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.
    */
    const numberOrSum50=function(firstNumber, secondNumber){
        let num1=firstNumber
        let num2=secondNumber
    if(num1===50 || num2===50|| num1+num2===50 ){
        return true
    }
    else{
        return false
    }
    }
    const testNumberOrSum50=numberOrSum50(26,25)
    console.log("testNumberOrSum50="+testNumberOrSum50)
    
    /*
    3)
    Create a function to remove a character at the specified position of a given string and return the new string.
    */
    const removeCharacter=function(index){
    let str="hello"
    let arrString=str.split('')
    arrString.splice(index,1)
    arrString.join('')
    return arrString.join('')
    }
    const testRemoveCharacter=removeCharacter(2)
    console.log("removeCharacter="+testRemoveCharacter)
    /*
    4)
     Create a function to find the largest of three given integers.
    */
    const largestNumber=function(firstNumber,secondNumber,thirdNumber){
        if(firstNumber>secondNumber &&firstNumber>thirdNumber){
            return firstNumber
        }
        else if(secondNumber>firstNumber &&secondNumber>thirdNumber){
            return secondNumber
        }
        else{
            return thirdNumber
        }
    }
    const testLargeNumber=largestNumber(1,2,3)
    console.log("biggest Number="+ testLargeNumber)
    /*
    5)
    Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
    */
    const numberInRange=function(firstNumber,secondNumber){
    if((firstNumber>=40 && firstNumber<=60) && (secondNumber>=40 && secondNumber<=60)||(firstNumber>=70 && firstNumber<=100) &&(secondNumber>=70 && secondNumber<=100)){
        return true
    }
    else{
        return false
    }
    }
    const testNumberInRange=numberInRange(70 ,80)
    console.log("in a range="+testNumberInRange)
    /*
    6) 
    Create a function that creates and returns the specified number of copies of a given string (positive number).
    
    7)
    Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.
    */
    
    const cityName=function(str){
        
        if(str.startsWith("New")|| str.startsWith("Los")){
            return str
        }
        else{
            return ""
        }
    }
    const testCityName=cityName("NewCity")
    console.log("returns a city if it starts los or new="+testCityName)
    /*
    
    8)
    Create a function to calculate the sum of three elements of a given array of integers of length 3.
    */
    const sumArray=function(arr){
        let sum=0
        for(let i=0;i<arr.length;i++){
           sum+=arr[i]
        }
        return sum
    
    }
    let arr=[4,5,10]
    const testSumArray=sumArray(arr)
    console.log("sum of three elements ="+testSumArray)
    /*
    
    9)
    Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
    */
    const arrayContains1Or3=function(arr){
    for(let i=0;arr.length;i++){
        if(arr[i]===1 || arr[i]===3){
            return true
        }
        else{
            return false
        }
    }
    }
    arr=[1,5]
    const testArrayContains1Or3=arrayContains1Or3(arr)
    console.log("ArrayContains1Or3="+testArrayContains1Or3)
    /*
    
    10)
    Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
    */
    const arrayNotContains1Or3=function(arr){
        for(let i=0;arr.length;i++){
            if(arr[i]!==1 &&arr[i]!==3){
                return true
            }
            else{
                return false
            }
        }
        }
        let arr1Or3=[1,3]
        const testArrayNotContains1Or3=arrayNotContains1Or3(arr1Or3)
        console.log("ArrayNotContains1Or3="+testArrayNotContains1Or3)
    
    /*
    
    11)
    Create a function to find the longest string from a given array of strings.
    */
    const longestString=function(arr){
        let longestString=arr[0]
        for(let i=0;i<arr.length;i++){
            console.log(arr[++i].length)
        if(arr[i].length<arr[(++i)].length){
            longestString=arr[++i]
        }
    }
    return longestString
    }
    
     arr=["find", "longest","string"]
    const testLongestString=longestString(arr)
    console.log(testLongestString)
     
    /*
    
    12)
    Create a function to find the types of a given angle.
    
    Types of angles:
        Acute angle: An angle between 0 and 90 degrees.
        Right angle: An 90 degree angle.
        Obtuse angle: An angle between 90 and 180 degrees.
        Straight angle: A 180 degree angle.
        */
    const typeOfAngle=function(angle){
        if(angle>=0 && angle<90)
        {
            console.log("acute angle")
        }
       else if(angle===90)
        {
            console.log("Right angle")
        }
       else if(angle>90 && angle<180)
        {
            console.log("obtuse angle")
        }
        else if(angle===180)
        {
            console.log("Straight angle")
        }
    
    }
    typeOfAngle(30)
    
        /*
    
    13)
    Create a function to find the index of the greatest element of a given array of integers
    */
    const indexOfLargestElement=function(arr){
        let index=0
        let largestElement=arr[0]
        for(let i=0;i<arr.length;i++)
        {
           if(arr[i]<arr[i+1]) {
               index=i+1
               largestElement=arr[i+1]
           } 
        }
       return index
    }
    let arrIndex=[4,6,1,8]
    const testIndexOfLargestElement=indexOfLargestElement(arrIndex)
    console.log("index of greatest element="+testIndexOfLargestElement)
    
    /*
    
    14)
    Create a function to get the largest even number from an array of integers.
    */
    
    const largestEvenNumber=function(){
    let arr=[4,5,8,2,9,20]
    let arrEven=[]
    let largestEvenNumber=0
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0 ){
        arrEven.push(arr[i])
            
        
    }
    
    }
    for(let i=0;i<arrEven.length;i++){
        if(arrEven[i]<arrEven[i+1]){
            largestEvenNumber=arrEven[i+1]
    }
    
    return largestEvenNumber
    
    }
    }
    const testLargestEvenNumber=largestEvenNumber()
    console.log(testLargestEvenNumber)
    /*
    
    15)
    Create a function to check from two given integers, whether one is positive and another one is negative.
    */
    
    /* const negativeAndPositive=function(firstNumber,secondNumber){
        if(firstNumber<0 )
    } */
    
    /*
    
    16)
    Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
    
    17)
    Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
    
    18)
    Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:
    
    If the number has 3 as a factor, output 'Diego'.
    If the number has 5 as a factor, output 'Riccardo'.
    If the number has 7 as a factor, output 'Stefano'.
    If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
    Examples
    28's factors are 1, 2, 4, 7, 14, 28.
    this would be a simple "Stefano".
    30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
    this would be a "DiegoRiccardo".
    34 has four factors: 1, 2, 17, and 34.
    this would be "34".
    
    19)
    Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
    
    */