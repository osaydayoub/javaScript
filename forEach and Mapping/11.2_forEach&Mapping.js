const array=[1,2,3,4,5,6,7,8,9];
function doubleValues(arr){
const newArray= arr.map(num=>num*2)
return newArray;
}

function onlyEvenValues(array){
    let newArray=[];
    array.forEach(num => {
        if(num%2==0){
            newArray.push(num);
        }
    });
    return newArray;
}
//console.log(onlyEvenValues(array))

//3.Write a function called showFirstAndLast which accepts
//an array as an argument and returns a new array with only
//the first and last elements from the function’s argument
//array. The returned array should only contain elements
//that are strings.

function showFirstAndLast(array){
    const newArray=[];
    let last=array.length-1;
    array.forEach((element,index)=>{
        if(typeof(element)==='string'&&(index===0||index===last)){
            newArray.push(element);
        }
    });
    return newArray; 
}
// const arr=['2','a','aaa','last',1,'2']
// console.log(showFirstAndLast(arr));

// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
function vowelCount(str){
    const vowelsCounter = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    };
    str.split('').forEach(letter => {
        const lowerCase = letter.toLowerCase();
        if (lowerCase==='a'||lowerCase==='e'||lowerCase==='i'||lowerCase==='o'||lowerCase==='u') {
            vowelsCounter[lowerCase] += 1;
      }
    });
    return vowelsCounter;
    }

 // console.log(vowelCount("We thought you'd have put solids on the kitchen ledge, but no; it's as if you hate growing up"))

//  5. Write a function capitalize that takes a string as an
//  argument and will return the whole string capitalized
function capitalize(str){
    let array = str.split(' ')
    let newArray =  array.map(word => word.toUpperCase())
    return newArray.join(' ');
}
//console.log(capitalize('hello, how are you'))

//rewrite
// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

// function shiftLetters(str){
//     const wordsArray=str.split(' ');
//     wordsArray    
//     return str.split(" ").map(word => {
//     return word.split("").map(letter => {
//     return String.fromCharCode((letter.charCodeAt() + 1)) })
//     .join('') })
//     .join(' ')
//     }

// console.log(shiftLetters('abc def'))

// 7.Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
function swapCase(str){
    let array = str.split(' ')
    let newArray =  array.map((word,index) =>{
        if(index%2==1){
            return word.toUpperCase();
        }else{
            return word.toLowerCase();
        }
    } )
    return newArray.join(' ');
}

//console.log(swapCase('aaa rrr aaa aaa aaa'))

