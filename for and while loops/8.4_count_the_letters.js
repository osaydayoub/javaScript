const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];

function countLetters(array){
    const result={};
    for(let i=0; i<array.length;i++){
        for(char of array[i].toLowerCase()){
            if(char>='a' && char<='z'){
                if(!(result.hasOwnProperty(char))){
                    result[char]=1;
                }else{
                    result[char]++;
                }               
            }
        }
    }
    return result;
}

const entries = Object.entries(countLetters(array));
entries
let maxChar=entries[0][0];
let max=entries[0][1];

for(letter of entries){
    if(letter[1]>max){
        max=letter[1];
        maxChar=letter[0];
    }
}
console.log(maxChar);




    