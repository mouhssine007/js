//Promptse user  for the interval 
let startNumber = parseInt(prompt(" Enter the starting number of the interval"));
let endNumber = parseInt(prompt(" Enter the ending number of the interval"));
//check if inputs are valid integer 

if(!isNaN(startNumber)&& !isNaN(endNumber) && Number.isInteger(startNumber)&& Number.isInteger(endNumber) && startNumber<endNumber && startNumber>1){
    console.log(`Prime numbers in the interval ${startNumber}, ${endNumber} :`);
    //chedk for prime numbers in the interbal 
    for(let i=startNumber ;i<=endNumber;i++){
  
        let isPrime = true ;

        for(j=2; j<=Math.sqrt(i);j++){
            if(i%j === 0){
                isPrime=false;
                break;
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
}else {
    console.log("Please enter valid integer ,ensuring that the starting number is less than the eneding number and greater than1");
}
