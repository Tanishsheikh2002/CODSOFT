let string = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // Change button color on click
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 100);

        if(e.target.innerHTML == '='){
            // Replace 'X' with '*' before evaluating the expression
            string = string.replace(/X/g, '*');
            string = eval(string); // Evaluate the expression
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'CL'){
            //clear all string
            string = "";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'DE'){
            // If the DE button is clicked, remove the last character
            string = string.substring(0, string.length - 1); 
            document.querySelector('input').value = string;
        }
        else{
        string += e.target.innerHTML
        document.querySelector('input').value = string;
        }
    })
})   
    buttons.addEventListener('click', () => {
    // Toggle between 'normal' and 'clicked' classes
    if (buttons.classList.contains('button1')) {
        buttons.classList.remove('button1');
        buttons.classList.add('clicked');
    } else {
        buttons.classList.remove('clicked');
        buttons.classList.add('button1');
    }
});