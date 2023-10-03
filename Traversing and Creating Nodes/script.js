const li=document.querySelector('.start-here');
li.textContent='main title';
const ulArray=document.querySelectorAll('ul');
let myNewLi = document.createElement('li');
let liText = document.createTextNode("sub title 4");
myNewLi.appendChild(liText)
ulArray[1].appendChild(myNewLi);
const liArray=document.querySelectorAll('li');
let index=liArray.length;
liArray[index-1].remove();
const title=document.querySelector('title');
title.textContent='Master Of The Dom';
const p=document.querySelector('p');
p.textContent+=' & good bye!'