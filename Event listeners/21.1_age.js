// Create a webpage that has an input field for the user’s age and
// a button. If the user enters a number above 18, make the text
// “you can drink appear”. If the user enters a number below 18,
// make the text “you’re too young” appear
const input=document.querySelector('input');
const clickButton = document.getElementById('click');
const output = document.getElementById('output');
function updateOutput(message){
    output.innerText = message;
}

clickButton.addEventListener('click', function() {
    if(input.value>18){
        updateOutput('you can drink appear');
    }else{
        updateOutput('you’re too young');
    }
    
})
