const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];
// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
// 2. Remove the bullet points of the ordered list with
// JavaScript.
// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
    //ordered list
    const body=document.querySelector('body'); 
    const myNewOl = document.createElement('ol');
    body.appendChild(myNewOl);
    let newLi;
    let text='';
    users.forEach((user)=>{
        text=document.createTextNode(`${user.firstName} ${user.lastName}`)
        newLi=document.createElement('li');
        newLi.appendChild(text);
        newLi.dataset.id=`${user.id}`
        myNewOl.appendChild(newLi);
    })
    myNewOl.style.listStyleType="none";