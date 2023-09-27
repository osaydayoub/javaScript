function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] +
    arr[9];
    }
   console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));
   // there is tow problems in line 2-3:
   //in line 3 access to an array with an index out of range arr[10]
   // so we get NaN, the range of index is 0-9,
   //so to get the value of the even numbers we have to go to arr[1]+arr[3]...
    