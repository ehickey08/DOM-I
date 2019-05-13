let allDigits = document.querySelectorAll('.digit');
let tenthsCounter = 0;
let hundredthsCounter = 0;
let onesCounter = 0;
let tensCounter = 0;

let count = function() {
    tenthsCounter++;
    if(tenthsCounter<10){
        allDigits[4].textContent = tenthsCounter;
    } else {
        tenthsCounter=0;
        allDigits[4].textContent = tenthsCounter;
        hundredthsCounter++;
    }

    if(hundredthsCounter<10){
        allDigits[3].textContent = hundredthsCounter;
    } else{
        hundredthsCounter = 0;
        allDigits[3].textContent = hundredthsCounter;
        onesCounter++
    }

    if(onesCounter<10){
        allDigits[1].textContent = onesCounter;
    } else{
        onesCounter = 0;
        allDigits[1].textContent = onesCounter;
        tensCounter++;
    }

    if(tensCounter===1){
        allDigits[0].textContent = tensCounter;
        allDigits[1].textContent = 0;
        allDigits[3].textContent = 0;
        allDigits[4].textContent = 0;
        allDigits.forEach (el => el.style.color = 'red');
        window.clearInterval(myTimer);
    } 
    
}
let myTimer = window.setInterval (count, 10);