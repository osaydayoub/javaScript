const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);
people.shift();
// console.log(people);
people.pop();
// console.log(people);
people.unshift('Matt');
// console.log(people);
people.push('Osayd');
// console.log(people);
const copyArray=people.slice(2);
// console.log(copyArray);
let indexOfMary=people.indexOf('Mary');
// console.log(indexOfMary);
let indexOfFoo=people.indexOf('Foo');
// console.log(indexOfFoo);
people.splice(0,people.length,'Greg', 'Mary', 'Devon', 'James');
// console.log(people);
people.splice(2,1, 'Elizabeth', 'Artie');
// console.log(people);
let withBob=people.concat('Bob');
// console.log(withBob);
