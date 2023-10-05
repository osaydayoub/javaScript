const header1=document.createElement('h1');
const header3=document.createElement('h3');
const paragraph1=document.createElement('p');
const img=document.createElement('img');
const body=document.body;
const newLine=document.createElement('br');
body.appendChild(header1);
header1.textContent='Hello to my web';
body.style.backgroundColor='#C9DFEC';
body.appendChild(header3);
header3.textContent='Topic of the day is: Artificial intelligence';
header3.style.color='blue';
body.appendChild(paragraph1);
paragraph1.textContent=
`Artificial intelligence (AI) is the intelligence of machines or software,
 as opposed to the intelligence of humans or animals.
 It is also the field of study in computer science that develops and studies intelligent machines.
  "AI" may also refer to the machines themselves.`
  paragraph1.style.width='50%';
  paragraph1.style.fontSize='20px';
  img.style.width='200px';
  img.style.height='200px';
  img.src='./img/19.4.png'
  body.appendChild(img);






