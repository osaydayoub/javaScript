// Without running the code below, explain in your own
// words what the result of each block of code will be and
// why.
//closures
// Block 1
// var b = 1;
// function someFunction(number) {
// function otherFunction(input) {
// return b;
// }
// b = 5;
// return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
//result=5 , b=5 is in the closure of otherFunction.

//Block 2
// var a = 1;
// function b2() {
// a = 10;
// return;
// function a() { }
// }
// b2();
// console.log(a);
// result =1;
//function a is known only inside the function b2 block 

//Block 3
// let i;
// for (i = 0; i < 3; i++) {
// const log = () => {
// console.log(i);
// }
// setTimeout(log, 100);
// }

// result 3 3 3
//the setTimeout runs the log only after the for loop finish (after 100 milliseconds) 
//and at that time the value of i is 3 

