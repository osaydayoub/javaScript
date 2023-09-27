function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter ++ ;
    }
    } return counter ;
    }
    countOccurrences ( "ini mini miny moe" , "n" );
    // in line 5 - conter+1 ; dosn't change the value of counter i chnge it to counter++;