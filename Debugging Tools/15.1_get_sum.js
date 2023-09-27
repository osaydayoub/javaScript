function getSum(arr1, arr2){
let sum = 0;
for (let i=0; i < arr1.length; i++){
sum += arr1[i];
}
for (let i=0; i < arr2.length; i++){
sum += arr2[i];
}
return sum;
}
 console.log(getSum([1,2,3],[5,66,23]));
//1. the line that contains the problem is 10 & 2
//2. google chrome debugger
//3.for the bug in line 10 ,there should be 2 arguments and(,) in between for getSum function, 
//when run the debugger in the first time we try to get value of arr1 in line 3 we get the note
//  Cannot read properties of undefined (reading 'length') . 
// the bug in line 2, when we try to change the value of sum in line 4 we get the note (Assignment to constant variable) 
// so to solve this we change line 2 and use let instead.
// and to get the return value of the function we have to add return sum in line 9
 