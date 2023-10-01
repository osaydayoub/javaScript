// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
//Block 1
// function funcA() {
//     console.log(a);
//     console.log(foo());
//     var a = 1;
//     function foo() {
//     return 2;
//     }
//     }
//     funcA();
// the result:
// line 7:undefined -hoisting  var ,declare var without initialization 
// line 8: 2 - hoisting functions

//Block 2
// var fullName = 'John Doe';
// var obj = {
// fullName: 'Colin Ihrig',
// prop: {
// fullName: 'Aurelio De Rosa',
// getFullName: function () {
// return this.fullName;
// }
// }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());
// the result:
// line 30: Aurelio De Rosa- 
//var is known outside of the block where it has been declared
// line 32: undefined- 
//the function is known but the use of this out of the scope of the object return undefined

//Block 3
// function funcB() {
//     let a = b = 0;
//     a++;
//     return a;
//     }
//     funcB();
//     console.log(typeof a);
//     console.log(typeof b);
// the result:!
//Block 4
// function funcC() {
//     console.log("1");
//     }
//     funcC();
//     function funcC() {
//     console.log("2");
//     }
//     funcC();
// the result:
//2
//2
//the function funcC value changed in the second assignment

// Block 5
// function funcD1() {
// d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
// var e = 1;
// }
// funcD2();
// console.log(e);
// the result:
//no result!
// e is not defined ,var declared in function block is known only inside that block

//Block 6
function funcE() {
console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// the result:
// Value of f in global scope:  undefined
// Value of f in local scope:  1
//in line 80, undefined -f is declared var without initialization -hoisting  var 
//line 84 , f is initialized




    




