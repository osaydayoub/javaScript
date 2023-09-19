let exmArray=[3,4,4,3,6,3];
let noDup=[];

    
    for( let i = 0 ; i < exmArray.length; i++ ){
        console.log(i);
        if((noDup.indexOf(exmArray[i]))===-1){
        noDup.push(exmArray[i]);
       }
    }


console.log(noDup);