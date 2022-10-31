
const message = prompt ("Welcome! What is your name?"); 
console.log (message); 

const message2 = alert ("Hey " + message + "!"); 

let whatNumber = Math.floor (Math.random() * 25) +1; 

const guess= prompt ("Enter a number between 0 and 25 to start guessing!"); 
  



while (guess !== whatNumber){ 
   prompt ("Guess again"); 
   guess++; 
   if (guess < whatNumber) {
      guess= prompt ("Unfortunatly, its not correct. You need to guess higher!"); 
   } else {
     guess= prompt ("Choose between 0 and 25"); 
   }    
}

console.log (guess == whatNumber + "You win"); 