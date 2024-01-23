const checkbox = document.getElementById("checkbox");
const submitBtn=document.querySelector("button[type=submit]");
//disable checkbox
checkbox.disabled=true;
submitBtn.disabled=true;


const elements=document.querySelectorAll(".element");
const selectColor=document.getElementById("selectorColor");
//selectColor = document.querySelector("#selectorColor");

console.log(selectColor)

elements.forEach(function(element){
    const color= getRandomColor();
    element.style.backgroundColor=color;
    element.innerHTML=color;
    selectColor.innerHTML=color;
});

function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i<6;i++){
        color += letter[Math.floor(Math.random() * 16)];
    
    }
    return color; 
    }

    //check if right color 


elements.forEach(function(element){
element.addEventListener('click' , function(){
    if(element.innerHTML===selectColor.innerHTML){
        checkbox.checked=true;
        submitBtn.disabled=false;
        submitBtn.classList.remove("btn-light");
        submitBtn.classList.add("btn-success");
    }else{
        submitBtn.classList.remove("btn-light");

        alert("please verify if you are human");
        location.reload(true);

    }
})
});


//prompt user for the range 
let minRange = parseFloat(prompt("Enter the minimum value of the rang : "));
let maxRange = parseFloat(prompt("Enter the maximum value of the rang : "));
//check if input is a valid number

if(!isNaN(minRange) && !isNaN(maxRange) && minRange<maxRange){
    //generate a random number within the  specified range
    let randomNumber = Math.random()*(maxRange - minRange) + minRange;
    console.log(`A random number between ${minRange} and ${maxRange} is ${randomNumber}`);
}else{
    console.log("Please enter valid number , ensuring that the minimum value is less than the maximum value.");

}