let letterGrade=prompt('please enter your grade - (A/B/C/D/F):');
if(letterGrade==='A'){
    console.log('90-100');
}else if(letterGrade==='B'){
    console.log('80-89');
}else if(letterGrade==='C'){
    console.log('70-79');
}else if(letterGrade==='D'){
    console.log('65-69');
}else if(letterGrade==='F'){
    console.log('0-64');
}else{
    alert('not a valid grade');
}



let numberGrade=prompt('please enter your grade - (0-100):');
if(numberGrade <= 100 && numberGrade>=90){
    console.log('A');
}else if(numberGrade <= 89 && numberGrade>=80){
    console.log('B');
}else if(numberGrade <= 79 && numberGrade>=70){
    console.log('C');
}else if(numberGrade <= 69 && numberGrade>=65){
    console.log('D');
}else if(numberGrade <= 64 && numberGrade>=0){
    console.log('F');
}else{
    alert('not a valid grade');
}
