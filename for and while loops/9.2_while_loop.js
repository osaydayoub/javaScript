let  randomInteger=Math.floor(Math.random() * 51);
console.log('randomInteger=',randomInteger);

let guessNumber=prompt('guess a number 0-50:');
while(guessNumber!=randomInteger){
    if(Math.abs(guessNumber-randomInteger)<=10){
        console.log(' the guess was too high!');
    }else{
        console.log(' the guess was too low.');
    }

    guessNumber=prompt('guess a number 0-50:');
}
alert('Your guess was write!');