// Instructions
// Write a function that takes a number as an argument and
// returns a Promise that tests if the value is less than or greater
// than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is
// rejected.
// Call the function and print the resolve and reject in a .then,
// .catch.

function greaterThan10(number){
    return new Promise((resolve, reject) => {
        if(number>10){
            resolve();
        }else{
            reject();
        }
    });

}

greaterThan10(11)
.then(()=>{
console.log('greater Than 10');
})
.catch(()=>{
    console.log('NOT greater Than 10');
});

greaterThan10(1)
.then(()=>{
console.log('greater Than 10');
})
.catch(()=>{
    console.log('NOT greater Than 10');
});