function findSmallest(a, b, c){
    if (a > b&& b> c){
    return c;
    } else if (a > c && c> b) {
    return b;
    } else {
    if(b>c){
        return (c>a)?a:c;
    }else{
        return (b>a)?a:b;
    }
    }
}
console.log(findSmallest(52,66, 2));
//1. the line that contains the problem is 10,2&4
//2. google chrome debugger
//3.for the bug in line 10 ,the name of the function is not correct so we get the note findSmalest is not defined,
// so change the name to be findSmallest.
//in line 2&4 the if statement is wrong we should use && 
// line 5  i swap the return a <->b to get the correct return value. 
//and add line 7-10 instead of return a