function swapped(object1){
const result={};
const array=Object.entries(object1);
for( property of array){
    result[property[1]]=property[0];
}
return result;
}
//console.log(ob);
//console.log(swapped(ob));

