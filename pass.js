let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById('passbox');
let lowerCase = document.getElementById('lowercase');
let upperCase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let gtnbtn = document.getElementById('generateButton')
let content = document.getElementById('content') 

sliderValue.textContent = inputSlider.value;

// slidervalues function
function sliderval(){
    sliderValue.textContent = inputSlider.value
}

inputSlider.addEventListener('input', sliderval)

// All characters
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let numbersVal = "0123456789"
let symbolsVal = "~!@#$%^&*"

gtnbtn.addEventListener('click', function(){
    passBox.value = generateValue()
})

function generateValue(){
    let generate = ""
    let allChars = ""

    allChars += lowerCase.checked ? lowerChars :  "";
    allChars += upperCase.checked ? upperChars :  "";
    allChars += numbers.checked ? numbersVal :  "";
    allChars += symbols.checked ? symbolsVal :  "";

    if(allChars == ""||allChars.length == 0 ){
        return generate;
    }

    for(var i = 1; i<=inputSlider.value; i++){
        generate += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    return generate;
}

content.addEventListener('click', () => {
        if (passBox.value != "" || passBox.length >= 1) {
            navigator.clipboard.writeText(passBox.value);
            content.innerHTML = "check";
            content.title = "Password Copied";
        }

        setTimeout(() => {
            content.innerHTML = "content_copy";
            content.title = "password copied";
        }, 3000);
    })