function fun1(str){
    if(str.length>=7){
        return "Strong";
    }else{
        return "Weak";
    }
}

function fun2(str){
    return (str.length>=7) ? "Strong" : "Weak";
}

function fun4(str){
    if(str.length>=7){
        if(/[A-Z]/.test(str))
            return "Very Strong";
        else
             return "Strong";
    }else{
        return "Weak";
    }
}

// let x="ossdfefeQs";
// console.log(fun1(x));
// console.log(fun2(x));
// console.log(fun4(x));