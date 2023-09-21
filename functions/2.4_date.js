function currentDate(){
    const dayNames = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames =["January","February","March","April","May","June","July","August","September",
        "October","November","December"];
    let currDate= new Date();
    let day=  currDate.getDay();
    let month= currDate.getMonth();
    let dayOfMonth= currDate.getDate();
    let year= currDate.getFullYear();
    return`Today is ${dayNames[day]} the ${dayOfMonth} of ${monthNames[month]} ${year}`;
}
// let result =currentDate();
// result;
