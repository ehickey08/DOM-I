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
        allDigits.forEach (el => el.classList.add('redDigit'));
        window.clearInterval(myTimer);
        resetButton.disabled = false;
        pauseButton.disabled = true; 
        digitDiv.style.animation = 'bounce-in 1s ease-in';
    } else {
        allDigits[0].textContent = 0;
    }
    
}

let startButton = document.createElement('button');
let resetButton = document.createElement('button');
let pauseButton = document.createElement('button');
let buttonDiv = document.createElement('div');
let digitDiv = document.querySelector('.digits');
let body = document.querySelector('body');

buttonDiv.appendChild(startButton);
buttonDiv.appendChild(pauseButton);
buttonDiv.appendChild(resetButton);

let parentDiv = document.createElement('div');
body.appendChild(parentDiv);
parentDiv.appendChild(digitDiv);
parentDiv.appendChild(buttonDiv);

parentDiv.style.display = 'flex';
parentDiv.style.flexDirection = 'column';
parentDiv.style.width = '60%';
parentDiv.style.marginTop = '10%';
parentDiv.style.justifyContent = 'space-around';
parentDiv.style.height = '40vh'
digitDiv.style.textAlign = 'center';

buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'space-between';

let buttons = document.querySelectorAll('button');

let buttonStyling = function(el) {
    el.style.width = '20vh';
    el.style.height = '8vh'
    el.style.margin = '3%'
}

buttons.forEach (buttonStyling);
startButton.textContent = 'Start Timer';
resetButton.textContent = 'Reset Timer';
pauseButton.textContent = 'Pause Timer';


startButton.addEventListener('click', (event) => {
    myTimer = window.setInterval (count, 10);
    console.log('clicked');
    startButton.disabled = true;
    resetButton.disabled = true;
});

let paused = true;
pauseButton.addEventListener('click', (event) => {
    if(paused){
        window.clearInterval(myTimer);
        paused = false;
        pauseButton.textContent = 'Resume Timer';
        resetButton.disabled = false;
    } else {
        myTimer = window.setInterval (count, 10);
        paused = true;
        pauseButton.textContent = 'Pause Timer';
        resetButton.disabled = true;
    }
});


resetButton.addEventListener('click', (event) => {
    allDigits.forEach(el => el.textContent = 0);
    allDigits.forEach(el => el.classList.remove('redDigit'));
    allDigits[2].textContent = ':'
    tenthsCounter = 0;
    hundredthsCounter = 0;
    onesCounter = 0;
    tensCounter = 0;
    pauseButton.textContent = 'Pause Timer';
    paused = true;
    startButton.disabled = false;
    pauseButton.disabled = false;
});