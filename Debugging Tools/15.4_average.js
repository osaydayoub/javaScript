function calcAverage (arr){
    var sum=0 ;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    } return sum/arr.length;
    }
    console.log(calcAverage ([ 85 , 90 , 92 ]));
// line 2 sum is undefined so we get NaN as a return value 
//so i chang it to sum =0 
// to get the average we have to divide by the array length...
