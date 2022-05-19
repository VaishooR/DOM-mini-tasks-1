let guessCount=1;                                //No of times the button is clicked to guess the correct number.
let randomNumber=Math.floor((Math.random()*10)+1);   //Generate a random number.
console.log(randomNumber);

//Target the button and add an event listener i.e onclick and equate it to a function which performs the necessary actions.
document.getElementById("btn").onclick=function(){   
    
    //target the input box and get its value by .value and store it in a variable typeNumber.
    let typeNumber= document.getElementById("inputNumber").value;   
    
    //if the number we type and the random number generated matches in the 1st guess itself
    if(typeNumber== randomNumber){
        alert("Correct guess!! You have guessed the correct number in the " + guessCount + " times")

    //if the number we type and the random number generated doesnot match, the 'n' number of guesses is upadted from 1 and an alert msg is popped .

    } else if(typeNumber>randomNumber){
        guessCount++;
        alert("No Wrong, Guess a smaller number")
    } else {
        guessCount++;
        alert("No Wrong, Guess a larger number")
    }
}
















// let guessNumber = 10;

// let randomNumber=Math.floor((Math.random()*10)+1);
// console.log(randomNumber);

// let output=document.getElementById("num");
// output.innerHTML=randomNumber;

// if(guessNumber==randomNumber){
//     var para=document.getElementById('para');
//     para.innerHTML="Correct guess";
// }else{
//     var para=document.getElementById('para');
//     para.innerHTML="Wrong guess"
// }