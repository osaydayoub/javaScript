function isString (str,fun){
    if(typeof(str==='string')){
        fun(str);
    }
}

function printString(str){
    console.log(str);
}
isString('Hi!',printString);

function firstWordUpperCase(str,fun){
const words = str.split(' ');
words.splice(0,1,words[0].toUpperCase());
return fun(words.toString().replaceAll(',',' '));
}
function addDash(str){
return str.replaceAll(' ','-')
}
function addStar(str){
    return str.replaceAll(' ','*')
}
let res=firstWordUpperCase('hello world!',addDash);
res
res=firstWordUpperCase('hello world again',addStar);
res


//10.4
function changeString(str,fun){
    return fun(str);
}
function addchar(char){
    return function(str){
        let newStr='';
        for(let i=0 ;i<str.length;i++){
            newStr+=str[i];
            newStr+=char;
        }
        return newStr;
    };
}
let addcharStar=addchar('*');
res= changeString('hello',addcharStar)
res

