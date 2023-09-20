function boomFun(n){
    let string;
    let array;
    for(let i=1;i<=n;i++){
        text = i.toString();
        array= text.split('');
        array
        if(i%7===0){
            if(array.includes('7')){
                console.log('BOOM-BOOM');
            }else{
                console.log('BOOM');
            }
        }else{
            console.log(i);
        }
    }
}
//boomFun(77);
