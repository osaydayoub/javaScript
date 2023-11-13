// Question 1:
// In your own words what will this point to and why?
// (Note this is the global scope)
// console.log(this);
//answer 1:
// a blank object because there is no object that this point to
//

// Question 2:
// a. In your own words what will this point to and why?
// b. How can you fix this code?
// const myObj = {
// name: "Timmy",
// greet: () => {
// console.log(`Hello ${this.name}`);
// },
// };
// myObj.greet();
// answer 2:
// will  not point to myObj , arrow function does not have this
// change to regular function 

const myObj = {
name: "Timmy",
greet: function(){
console.log(`Hello ${this.name}`);
},
};
myObj.greet();

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
console.log(this);
};

//Question 4:
//In your own words what will this point to and why?
const myFuncArrow = () => {
console.log(this);
};
myFuncArrow();

// Question 5:
// a. In your own words, what will this point to and why?
// b. How can you fix this code?
document.querySelector(".element").addEventListener(() => {
console.log(this);
});
